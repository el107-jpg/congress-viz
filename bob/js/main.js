import * as d3 from 'd3';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import * as tf from '@tensorflow/tfjs';

// Party configuration (single source of truth for colors and labels)
const PARTIES = [
  { id: "Republican", label: "Republican", color: "#e41a1c" },
  { id: "Democratic", label: "Democrat", color: "#377eb8" },
  { id: "Libertarian", label: "Libertarian", color: "#ffd100" },
  { id: "Independent", label: "Independent", color: "#838382ff" }
];

// Styling constants (shared between canvas and SVG rendering)
const STYLES = {
  point: { radius: 5, opacity: 0.7, strokeColor: "#333", strokeWidth: 0.5 },
  edge: { color: "#999", opacity: 0.4, strokeWidth: 0.5 }
};

// Global references for bill selection (set by runVisualization)
let currentBillSelection = null;
let currentClearBillSelection = null;
let currentMemberSelection = null;
let currentClearMemberSelection = null;

// Side panel functions
function openSidePanel(member) {
  const panel = document.getElementById('member-panel');
  const content = document.getElementById('member-panel-content');
  const title = document.getElementById('member-panel-title');

  if (!member) return;

  title.innerHTML = `
    <a href="https://www.govtrack.us/congress/members/${member.bioid}" target="_blank" style="color: inherit;">${member.name}</a>
    <div style="font-size: 0.75em; font-weight: normal; color: #666; margin-top: 4px;">
      ${member.party} · ${member.state}-${member.district || 'N/A'}
    </div>
  `;

  // Get member's bills and build content
  const sponsorships = memberToBills.get(member.bioid) || [];
  const billsHtml = sponsorships.map(s => {
    const bill = billMap.get(s.bill_id);
    if (!bill) return '';
    const role = s.spon ? 'Sponsor' : 'Cosponsor';
    const topic = bill.topic || 'Uncategorized';
    const billTypeMap = { HR: 'house-bill', HRES: 'house-resolution', HCONRES: 'house-concurrent-resolution', HJRES: 'house-joint-resolution' };
    const billSlug = billTypeMap[bill.billtype] || 'house-bill';
    const billUrl = `https://www.congress.gov/bill/${bill.congress}th-congress/${billSlug}/${bill.number}`;
    return `
      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid #eee;">
        <div style="font-weight: 600; margin-bottom: 4px; font-size: 0.55em;">
          <a href="${billUrl}" target="_blank" style="color: inherit; text-decoration: underline;">${bill.billtype}-${bill.number}: ${bill.title}</a>
        </div>
        <div style="font-size: 0.55em; color: #666;">
          ${role} · ${s.date} <br> ${topic}
        </div>
        <div style="font-size: 0.55em; margin-top: 4px;">
          <span class="bill-sponsors-link" data-bill-id="${s.bill_id}" style="color: #377eb8; cursor: pointer; text-decoration: underline;">Show Bill Sponsors</span>
        </div>
      </div>
    `;
  }).join('');

  content.innerHTML = billsHtml || '<p style="color: #666;">No bills in this time window</p>';

  // Add click handlers for bill sponsors links
  content.querySelectorAll('.bill-sponsors-link').forEach(link => {
    link.addEventListener('click', () => {
      const billId = parseInt(link.dataset.billId, 10);
      if (currentBillSelection) currentBillSelection(billId);
    });
  });

  panel.classList.add('open');
}

function closeMemberPanel() {
  document.getElementById('member-panel').classList.remove('open');
}

function closeBillPanel() {
  document.getElementById('bill-panel').classList.remove('open');
}

function billSidePanel(bill_id) {
  const panel = document.getElementById('bill-panel');
  const content = document.getElementById('bill-panel-content');
  const title = document.getElementById('bill-panel-title');

  const bill = billMap.get(bill_id);
  if (!bill) return;

  const billTypeMap = { HR: 'house-bill', HRES: 'house-resolution', HCONRES: 'house-concurrent-resolution', HJRES: 'house-joint-resolution' };
  const billSlug = billTypeMap[bill.billtype] || 'house-bill';
  const billUrl = `https://www.congress.gov/bill/${bill.congress}th-congress/${billSlug}/${bill.number}`;
  const topic = bill.topic || 'Uncategorized';

  title.innerHTML = `
    <a href="${billUrl}" target="_blank" style="color: inherit;">${bill.billtype}-${bill.number}</a>
    <div style="font-size: 0.65em; font-weight: normal; margin-top: 4px;">
      ${bill.title}
    </div>
    <div style="font-size: 0.6em; font-weight: normal; color: #666; margin-top: 4px;">
      ${topic}
    </div>
  `;

  // Get bill's sponsors and build content
  const sponsors = billToMembers.get(bill_id) || [];
  // Sort: sponsors first, then cosponsors
  sponsors.sort((a, b) => b.spon - a.spon);

  const sponsorsHtml = sponsors.map(s => {
    const member = memberMap.get(s.bioid);
    if (!member) return '';
    const role = s.spon ? 'Sponsor' : 'Cosponsor';
    return `
      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid #eee;">
        <div style="font-weight: 600; margin-bottom: 4px; font-size: 0.55em;">
          <span class="member-select-link" data-bioid="${member.bioid}" style="color: #377eb8; cursor: pointer; text-decoration: underline;">${member.name}</span>
        </div>
        <div style="font-size: 0.55em; color: #666;">
          ${member.party} · ${member.state}-${member.district || 'N/A'} <br>
          ${role} · ${s.date}
        </div>
      </div>
    `;
  }).join('');

  content.innerHTML = sponsorsHtml || '<p style="color: #666;">No sponsors found</p>';

  // Add click handlers for member selection links
  content.querySelectorAll('.member-select-link').forEach(link => {
    link.addEventListener('click', () => {
      const bioid = link.dataset.bioid;
      if (currentMemberSelection) currentMemberSelection(bioid);
    });
  });

  panel.classList.add('open');
}

// Initialize close button listeners
document.getElementById('member-panel-close').addEventListener('click', () => {
  closeMemberPanel();
  if (currentClearMemberSelection) currentClearMemberSelection();
});

document.getElementById('bill-panel-close').addEventListener('click', () => {
  closeBillPanel();
  if (currentClearBillSelection) currentClearBillSelection();
});

// Fetch visualization data from server
async function fetchVisualizationData(startDate, endDate, signal) {
  const url = `/api/visualization-data?start_date=${startDate}&end_date=${endDate}`;
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

// Pairwise Euclidean distances using TensorFlow.js
function pairwiseDistances(Y) {
  return tf.tidy(() => {
    const sumSq = tf.sum(tf.square(Y), 1, true); // [n, 1]
    const dot = tf.matMul(Y, Y, false, true);    // [n, n]
    
    const distSq = sumSq.add(sumSq.transpose()).sub(dot.mul(2));
    
    return distSq.maximum(0).sqrt();
  });
}

// Fill diagonal with row sums (excluding current diagonal) using TensorFlow.js
function fillDiagWithRowSums(M) {
  return tf.tidy(() => {
    const n = M.shape[0];
    const mask = tf.sub(tf.ones([n, n]), tf.eye(n));
    const offDiag = tf.mul(M, mask);
    const rowSums = tf.sum(offDiag, 1).neg();
    return tf.add(offDiag, tf.diag(rowSums));
  });
}

// CPU-based Eigen Decomposition using Power Iteration with Hotelling Deflation
function getTopKEigenCPU(A, k, maxIter = 100) {
    const n = A.length;
    
    // Deep copy A so we can modify (deflate) it without ruining the original
    // If memory is an issue, you can modify A directly but it destroys the data.
    let matrix = A.map(row => [...row]); 
    
    const eigenvalues = [];
    const eigenvectors = [];

    for (let i = 0; i < k; i++) {
        // 1. Random initialization
        let b = Array(n).fill(0).map(() => Math.random());
        let b_norm = Math.hypot(...b);
        b = b.map(val => val / b_norm);

        let lambda = 0;
        let diff = 1;

        // 2. Power Iteration Loop
        for (let iter = 0; iter < maxIter; iter++) {
            // Multiply: b_next = matrix * b
            const b_next = new Array(n).fill(0);
            for (let r = 0; r < n; r++) {
                let sum = 0;
                for (let c = 0; c < n; c++) {
                    sum += matrix[r][c] * b[c];
                }
                b_next[r] = sum;
            }

            // Normalize
            const b_next_norm = Math.hypot(...b_next);
            const b_normalized = b_next.map(val => val / b_next_norm);

            // Check convergence (Rayleigh quotient or simple dot product)
            const dot = b.reduce((sum, val, idx) => sum + val * b_normalized[idx], 0);
            if (Math.abs(1 - Math.abs(dot)) < 1e-9) {
                b = b_normalized;
                lambda = b_next_norm; // Approximation for symmetric positive semi-definite
                
                // Fix sign if lambda is negative (check Rayleigh quotient direction)
                // For MDS (centering matrix), usually we care about positive ones.
                // A stricter check: lambda = (Ax . x) / (x . x)
                let num = 0; 
                for(let r=0; r<n; r++) num += b_next[r] * b[r];
                lambda = num; 
                break;
            }

            b = b_normalized;
            lambda = b_next_norm;
        }

        eigenvalues.push(lambda);
        eigenvectors.push(b);

        // 3. Hotelling Deflation: A_new = A - lambda * v * v^T
        // Removes the found eigenvector so the next loop finds the next biggest one.
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                matrix[r][c] -= lambda * b[r] * b[c];
            }
        }
    }

    // Transpose eigenvectors to get shape [n, k] (columns are vectors)
    const vectorsTransposed = Array(n).fill(0).map(() => Array(k).fill(0));
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < k; c++) {
            vectorsTransposed[r][c] = eigenvectors[c][r];
        }
    }

    return {
        values: eigenvalues,
        vectors: vectorsTransposed
    };
}

// Torgerson Scaling (Classical MDS) using CPU-based Eigen Decomposition
function torgersonScaling(D, k = 2) {
    const n = D.length;
    
    // 1. Double Centering (Pure JS - Optimized)
    // We do this in one pass to avoid creating 5 different matrices
    
    // A. Square distances
    const D2 = D.map(row => row.map(val => val * val));
    
    // B. Calculate Means
    const rowMeans = D2.map(row => row.reduce((a, b) => a + b, 0) / n);
    const grandMean = rowMeans.reduce((a, b) => a + b, 0) / n;
    
    // C. Calculate B matrix: -0.5 * (D2 - rowMean - colMean + grandMean)
    const B = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const val = -0.5 * (D2[i][j] - rowMeans[i] - rowMeans[j] + grandMean);
            row.push(val);
        }
        B.push(row);
    }

    // 2. Eigen Decomposition (The new CPU function)
    const { values, vectors } = getTopKEigenCPU(B, k);

    // 3. Coordinate Scaling: coord = eigenvector * sqrt(eigenvalue)
    const coords = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < k; j++) {
            // max(0, val) handles small negative noise
            const scale = Math.sqrt(Math.max(0, values[j])); 
            row.push(vectors[i][j] * scale);
        }
        coords.push(row);
    }

    return coords;
}

// SMACOF-style MDS optimization using TensorFlow.js
function geomds(cosimilarities, weights, init, maxiter = 100, tol = 1e-4) {
  
  // init is now a TensorFlow tensor
  let Y = init;

  // Weight row sums for normalization [n, 1]
  const weightSum = tf.sum(weights, 1, true);

  let dist = pairwiseDistances(Y);
  return tf.tidy(() => {
    for (let iter = 0; iter < maxiter; iter++) {
      const distOld = dist;
      
      // Use tidy to auto-dispose intermediate tensors, keeping only YNew and newDist
      const [YNew, newDist] = tf.tidy(() => {
        // A = cosimilarities / (dist + epsilon)
        const A = tf.div(cosimilarities, tf.add(dist, 0.0001));

        // B_raw = weights * (1 - A)
        const BRaw = tf.mul(weights, tf.sub(1, A));

        // B with diagonal filled with row sums
        const B = fillDiagWithRowSums(BRaw);

        // Y_new = Y + (B @ Y) / weight_sum
        const BY = tf.matMul(B, Y);
        
        const YNext = tf.add(Y, tf.div(BY, weightSum));

        const distNext = pairwiseDistances(YNext);

        return [YNext, distNext];
      });

      // Check convergence (inside tidy to clean up diff tensor)
      //const diff = tf.tidy(() => tf.sum(tf.abs(tf.sub(newDist, distOld))).dataSync()[0]);

      // Dispose old tensors
      Y.dispose();
      distOld.dispose();

      Y = YNew;
      dist = newDist;

      //if (diff < tol) {
        //break;
      //}
    }

    return Y;
  });
}

// Align new positions to previous positions
function alignpositions(pos, prevPos) {
  const positions = tf.tensor2d(pos);
  const previousPositions = tf.tensor2d(prevPos);
  const dimensions = positions.shape[1];
  let transformation = [];
  for (let dim = 0; dim < dimensions; dim++) {
    const X1 = positions.slice([0, dim], [-1, 1]);
    const X2 = previousPositions.slice([0, dim], [-1, 1]);
    if (X1.mul([-1]).sub(X2).sum().dataSync()[0] < X1.sub(X2).sum().dataSync()[0]) {
      transformation.push(-1);
    } else {
      transformation.push(1);
    }
  }
  return transformation;
}

// Compute MDS positions from co-occurrence data
async function computeMDSPositions(data, previousPositions = null) {
  const { cosimilarity, bioids } = matrixFromAggregated(data.cooccurrenceMatrix);
  const N = bioids.length;

  if (N < 2) {
    throw new Error(`Need at least 2 members, got ${N}`);
  }

  const alpha = 1;
  const beta = 1.5;
  const dissimilarity = cosimilarity.map(row =>
    row.map(val => Math.pow(2.78, -alpha * val))
  );

  const weights = cosimilarity.map(row =>
    row.map(val => Math.pow(val, beta)+0.001)
  );

  const init = await torgersonScaling(dissimilarity, 2);
  const Y = geomds(tf.tensor2d(dissimilarity), tf.tensor2d(weights), tf.tensor2d(init), 100, 1e-4);
  const positions = await Y.array();

  const memberMap = new Map(data.members.map(m => [m.bioid, m]));
  const points = bioids.map((bioid, i) => ({
    bioid,
    x: positions[i][0],
    y: positions[i][1],
    ...memberMap.get(bioid)
  }));

  Y.dispose();

  // Align to previous positions if provided
  if (previousPositions) {
    const matched = points.filter(p => previousPositions.has(p.bioid));
    if (matched.length >= 2) {
      const currCoords = matched.map(p => [p.x, p.y]);
      const prevCoords = matched.map(p => {
        const prev = previousPositions.get(p.bioid);
        return [prev.x, prev.y];
      });
      const transformation = alignpositions(currCoords, prevCoords);

      // Apply transformation to all points
      for (const p of points) {
        p.x *= transformation[0];
        p.y *= transformation[1];
      }
    }
  }

  return { points, bioids };
}

// Build cosimilarity matrix from server's pre-aggregated data using TensorFlow.js
function matrixFromAggregated(cooccurrenceMatrix) {
  const bioids = [...new Set(cooccurrenceMatrix.flatMap(r => [r.bioid_1, r.bioid_2]))];
  const idx = new Map(bioids.map((id, i) => [id, i]));
  const N = bioids.length;

  // Build as a 2D array first, then convert to tensor
  const cosimilarity = Array.from({ length: N }, () => Array(N).fill(0));
  for (const { bioid_1, bioid_2, count } of cooccurrenceMatrix) {
    const i = idx.get(bioid_1);
    const j = idx.get(bioid_2);
    cosimilarity[i][j] = count;
    cosimilarity[j][i] = count;
  }

  return { cosimilarity, bioids };
}

// Validate fetched data
function validateData(data, startDate, endDate) {
  if (!data.cooccurrenceMatrix || data.cooccurrenceMatrix.length === 0) {
    throw new Error(`No co-occurrence data found for ${startDate} to ${endDate}`);
  }
}

// Create chart container with canvas, SVG, and tooltip
function createChartContainer(margin, width, height) {
  d3.select("#chart").selectAll("*").remove();

  const container = d3.select("#chart")
    .style("position", "relative")
    .style("width", `${width + margin.left + margin.right}px`)
    .style("height", `${height + margin.top + margin.bottom}px`);

  const dpr = window.devicePixelRatio || 1;

  // Faded canvas layer (for non-highlighted nodes during bill selection)
  const canvasFaded = container.append("canvas")
    .attr("width", width * dpr)
    .attr("height", height * dpr)
    .style("width", `${width}px`)
    .style("height", `${height}px`)
    .style("position", "absolute")
    .style("left", `${margin.left}px`)
    .style("top", `${margin.top}px`)
    .style("z-index", "1")
    .style("display", "none")
    .style("opacity", "0.15");

  const ctxFaded = canvasFaded.node().getContext("2d");
  ctxFaded.scale(dpr, dpr);

  // Main canvas layer (for highlighted nodes or all nodes when no bill selected)
  const canvas = container.append("canvas")
    .attr("width", width * dpr)
    .attr("height", height * dpr)
    .style("width", `${width}px`)
    .style("height", `${height}px`)
    .style("position", "absolute")
    .style("left", `${margin.left}px`)
    .style("top", `${margin.top}px`)
    .style("z-index", "2")
    .style("display", "none");

  const ctx = canvas.node().getContext("2d");
  ctx.scale(dpr, dpr);

  const svgElement = container.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("position", "absolute")
    .style("left", "0")
    .style("top", "0")
    .style("z-index", "2")
    .style("background", "transparent");

  const tooltip = container.append("div")
    .attr("class", "node-tooltip")
    .style("position", "absolute")
    .style("left", "0")
    .style("top", "0")
    .style("background", "rgba(0,0,0,0.8)")
    .style("color", "#fff")
    .style("padding", "8px 12px")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .style("pointer-events", "none")
    .style("opacity", 0)
    .style("z-index", "10")
    .style("will-change", "transform")
    .style("transform", "translate(0, 0)");

  const svg = svgElement.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg.append("defs").append("clipPath")
    .attr("id", "chart-clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  const chartArea = svg.append("g")
    .attr("clip-path", "url(#chart-clip)");

  return { container, canvas, ctx, canvasFaded, ctxFaded, svgElement, svg, chartArea, tooltip };
}

// Prepare edge data for visualization
function prepareEdgeData(cooccurrenceMatrix, pointMap) {
  const edgeWeights = cooccurrenceMatrix.map(e => e.count).sort((a, b) => a - b);
  const threshold = edgeWeights[Math.floor(edgeWeights.length * 0.95)];

  return cooccurrenceMatrix
    .filter(e => e.count >= threshold)
    .map(e => {
      const p1 = pointMap.get(e.bioid_1);
      const p2 = pointMap.get(e.bioid_2);
      return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, bioid_1: e.bioid_1, bioid_2: e.bioid_2 };
    });
}

// Create scale functions based on zoom/pan state
function createScaleFunctions(points, width, height, padding) {
  const xExtent = d3.extent(points, d => d.x);
  const yExtent = d3.extent(points, d => d.y);
  const baseXRange = xExtent[1] - xExtent[0];
  const baseYRange = yExtent[1] - yExtent[0];

  return function getScales(zoomLevel, panX, panY) {
    const xCenter = (xExtent[0] + xExtent[1]) / 2 + panX;
    const yCenter = (yExtent[0] + yExtent[1]) / 2 + panY;
    const xHalf = (baseXRange * (1 + padding)) / (2 * zoomLevel);
    const yHalf = (baseYRange * (1 + padding)) / (2 * zoomLevel);

    const xScale = d3.scaleLinear()
      .domain([xCenter - xHalf, xCenter + xHalf])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([yCenter - yHalf, yCenter + yHalf])
      .range([height, 0]);

    return { xScale, yScale };
  };
}

// Render to canvas (used during drag for performance)
// ctxFaded is optional - if provided with highlightedBioids, renders in two layers
function renderToCanvas(ctx, width, height, points, topEdges, colorScale, getScales, state, ctxFaded = null, highlightedBioids = null) {
  const { xScale, yScale } = getScales(state.zoomLevel, state.panX, state.panY);
  ctx.clearRect(0, 0, width, height);
  if (ctxFaded) ctxFaded.clearRect(0, 0, width, height);

  const hasHighlight = highlightedBioids && highlightedBioids.size > 0;

  // Draw regular edges (faded if bill is selected)
  ctx.strokeStyle = STYLES.edge.color;
  ctx.globalAlpha = hasHighlight ? 0.15 : STYLES.edge.opacity;
  ctx.lineWidth = STYLES.edge.strokeWidth;
  for (const e of topEdges) {
    ctx.beginPath();
    ctx.moveTo(xScale(e.x1), yScale(e.y1));
    ctx.lineTo(xScale(e.x2), yScale(e.y2));
    ctx.stroke();
  }

  // Draw highlighted edges for selected node
  if (state.selectedBioid) {
    ctx.strokeStyle = "#333";
    ctx.globalAlpha = 0.8;
    ctx.lineWidth = STYLES.edge.strokeWidth;
    for (const e of topEdges) {
      if (e.bioid_1 === state.selectedBioid || e.bioid_2 === state.selectedBioid) {
        ctx.beginPath();
        ctx.moveTo(xScale(e.x1), yScale(e.y1));
        ctx.lineTo(xScale(e.x2), yScale(e.y2));
        ctx.stroke();
      }
    }
  }

  // Draw points - split between canvases if bill is selected
  for (const p of points) {
    const isHighlighted = !hasHighlight || highlightedBioids.has(p.bioid);
    const targetCtx = (hasHighlight && !isHighlighted && ctxFaded) ? ctxFaded : ctx;

    targetCtx.globalAlpha = STYLES.point.opacity;
    targetCtx.beginPath();
    targetCtx.arc(xScale(p.x), yScale(p.y), STYLES.point.radius, 0, Math.PI * 2);
    targetCtx.fillStyle = colorScale(p.party);
    targetCtx.fill();
    targetCtx.strokeStyle = STYLES.point.strokeColor;
    targetCtx.lineWidth = (hasHighlight && isHighlighted) ? 2 : STYLES.point.strokeWidth;
    targetCtx.stroke();
  }

  // Draw selection ring
  if (state.selectedBioid) {
    const selected = points.find(p => p.bioid === state.selectedBioid);
    if (selected) {
      ctx.beginPath();
      ctx.arc(xScale(selected.x), yScale(selected.y), STYLES.point.radius * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = "#ffd000c2";
      ctx.globalAlpha = 1;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1;
}

// Render scale bar
function renderScaleBar(scaleBarGroup, xScale, width, scaleAlpha) {
  scaleBarGroup.selectAll("*").remove();

  const domainWidth = xScale.domain()[1] - xScale.domain()[0];
  const pixelsPerMdsUnit = width / domainWidth;
  const maxpixel = Math.round(Math.log(100 / pixelsPerMdsUnit) / -scaleAlpha);
  const spontopixel = (spon) => Math.exp(-scaleAlpha * spon) * pixelsPerMdsUnit;
  const ticks = [maxpixel, maxpixel + 1, maxpixel + 2];

  scaleBarGroup.append("text")
    .attr("x", 0)
    .attr("y", -18)
    .style("font-size", "11px")
    .style("font-family", "sans-serif")
    .style("font-weight", "bold")
    .text("Co-sponsorships");

  scaleBarGroup.append("line")
    .attr("x1", 0).attr("y1", 0)
    .attr("x2", spontopixel(maxpixel)).attr("y2", 0)
    .attr("stroke", "#333")
    .attr("stroke-width", 1.5);

  ticks.forEach(count => {
    const x = spontopixel(count);
    scaleBarGroup.append("line")
      .attr("x1", x).attr("y1", -5)
      .attr("x2", x).attr("y2", 5)
      .attr("stroke", "#333")
      .attr("stroke-width", 1.5);

    scaleBarGroup.append("text")
      .attr("x", x)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .style("font-size", "10px")
      .style("font-family", "sans-serif")
      .text(count);
  });

  scaleBarGroup.append("line")
    .attr("x1", 0).attr("y1", -5)
    .attr("x2", 0).attr("y2", 5)
    .attr("stroke", "#333")
    .attr("stroke-width", 1.5);
}

// Setup zoom controls
function setupZoomControls(svg, width, height, state, redraw) {
  const buttonGroup = svg.append("g")
    .attr("transform", `translate(${width + 20}, ${height / 2 - 30})`);

  // Zoom in button
  buttonGroup.append("rect")
    .attr("x", 0).attr("y", 0)
    .attr("width", 28).attr("height", 28)
    .attr("fill", "#fff")
    .attr("stroke", "#333")
    .attr("rx", 4)
    .style("cursor", "pointer")
    .on("click", () => { state.zoomLevel = Math.min(state.zoomLevel * 1.5, 35); redraw(); });

  buttonGroup.append("text")
    .attr("x", 14).attr("y", 19)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-family", "sans-serif")
    .style("pointer-events", "none")
    .text("+");

  // Zoom out button
  buttonGroup.append("rect")
    .attr("x", 0).attr("y", 35)
    .attr("width", 28).attr("height", 28)
    .attr("fill", "#fff")
    .attr("stroke", "#333")
    .attr("rx", 4)
    .style("cursor", "pointer")
    .on("click", () => { state.zoomLevel = Math.max(state.zoomLevel / 1.5, 0.5); redraw(); });

  buttonGroup.append("text")
    .attr("x", 14).attr("y", 54)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-family", "sans-serif")
    .style("pointer-events", "none")
    .text("−");
}

// Setup drag behavior for panning
function setupDragBehavior(svgElement, canvas, ctx, canvasFaded, ctxFaded, chartArea, width, height, points, topEdges, colorScale, getScales, state, redraw) {
  const drag = d3.drag()
    .filter((event) => event.target.tagName !== "circle")
    .on("start", () => {
      const highlightedBioids = state.selectedBillId
        ? new Set(billToMembers.get(state.selectedBillId)?.map(s => s.bioid) || [])
        : null;
      canvas.style("display", "block");
      if (highlightedBioids) canvasFaded.style("display", "block");
      chartArea.style("visibility", "hidden");
      renderToCanvas(ctx, width, height, points, topEdges, colorScale, getScales, state, ctxFaded, highlightedBioids);
    })
    .on("drag", (event) => {
      const highlightedBioids = state.selectedBillId
        ? new Set(billToMembers.get(state.selectedBillId)?.map(s => s.bioid) || [])
        : null;
      const { xScale, yScale } = getScales(state.zoomLevel, state.panX, state.panY);
      const dx = xScale.invert(0) - xScale.invert(event.dx);
      const dy = yScale.invert(0) - yScale.invert(event.dy);
      state.panX += dx;
      state.panY += dy;
      renderToCanvas(ctx, width, height, points, topEdges, colorScale, getScales, state, ctxFaded, highlightedBioids);
    })
    .on("end", () => {
      canvas.style("display", "none");
      canvasFaded.style("display", "none");
      chartArea.style("visibility", "visible");
      redraw();
    });

  svgElement.call(drag);
}

// Setup search bar for member selection
function setupSearchBar(points, setSelection) {
  const container = d3.select("#controls");

  // Remove existing search wrapper if present
  container.select(".search-wrapper").remove();

  // Create shared wrapper for both search bars
  const searchWrapper = container.insert("div", ":first-child")
    .attr("class", "search-wrapper")
    .style("display", "flex")
    .style("gap", "30px")
    .style("margin-bottom", "15px");

  const searchContainer = searchWrapper.append("div")
    .attr("class", "search-container");

  searchContainer.append("label")
    .attr("for", "member-search")
    .style("font-weight", "bold")
    .style("margin-right", "10px")
    .text("Search Member:");

  const inputWrapper = searchContainer.append("div")
    .style("display", "inline-block")
    .style("position", "relative");

  const input = inputWrapper.append("input")
    .attr("type", "text")
    .attr("id", "member-search")
    .attr("placeholder", "Type a name...")
    .style("padding", "6px 10px")
    .style("font-size", "14px")
    .style("width", "250px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px");

  const dropdown = inputWrapper.append("div")
    .attr("class", "search-dropdown")
    .style("position", "absolute")
    .style("top", "100%")
    .style("left", "0")
    .style("width", "250px")
    .style("max-height", "200px")
    .style("overflow-y", "auto")
    .style("background", "#fff")
    .style("border", "1px solid #ccc")
    .style("border-top", "none")
    .style("border-radius", "0 0 4px 4px")
    .style("display", "none")
    .style("z-index", "100");

  input.on("input", function () {
    const query = this.value.toLowerCase().trim();
    if (query.length < 2) {
      dropdown.style("display", "none");
      return;
    }

    const matches = points
      .filter(p => p.name.toLowerCase().includes(query))
      .slice(0, 10);

    dropdown.selectAll("*").remove();

    if (matches.length === 0) {
      dropdown.style("display", "none");
      return;
    }

    matches.forEach(p => {
      dropdown.append("div")
        .style("padding", "8px 10px")
        .style("cursor", "pointer")
        .style("border-bottom", "1px solid #eee")
        .html(`<strong>${p.name}</strong> <span style="color:#666">(${p.party}-${p.state})</span>`)
        .on("mouseover", function () { d3.select(this).style("background", "#f0f0f0"); })
        .on("mouseout", function () { d3.select(this).style("background", "#fff"); })
        .on("click", () => {
          dropdown.style("display", "none");
          setSelection(p.bioid);
        });
    });

    dropdown.style("display", "block");
  });

  // Hide dropdown when clicking outside
  d3.select("body").on("click.search", (event) => {
    if (!event.target.closest("#member-search") && !event.target.closest(".search-dropdown")) {
      dropdown.style("display", "none");
    }
  });
}

// Setup search bar for bill selection
function setupBillSearchBar(billSelection) {
  const searchWrapper = d3.select(".search-wrapper");

  // Remove existing bill search bar if present
  searchWrapper.select(".bill-search-container").remove();

  const searchContainer = searchWrapper.append("div")
    .attr("class", "bill-search-container");

  searchContainer.append("label")
    .attr("for", "bill-search")
    .style("font-weight", "bold")
    .style("margin-right", "10px")
    .text("Search Bill:");

  const inputWrapper = searchContainer.append("div")
    .style("display", "inline-block")
    .style("position", "relative");

  const input = inputWrapper.append("input")
    .attr("type", "text")
    .attr("id", "bill-search")
    .attr("placeholder", "Type bill ID or title...")
    .style("padding", "6px 10px")
    .style("font-size", "14px")
    .style("width", "300px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px");

  const dropdown = inputWrapper.append("div")
    .attr("class", "bill-search-dropdown")
    .style("position", "absolute")
    .style("top", "100%")
    .style("left", "0")
    .style("width", "400px")
    .style("max-height", "250px")
    .style("overflow-y", "auto")
    .style("background", "#fff")
    .style("border", "1px solid #ccc")
    .style("border-top", "none")
    .style("border-radius", "0 0 4px 4px")
    .style("display", "none")
    .style("z-index", "100");

  input.on("input", function () {
    const query = this.value.toLowerCase().trim();
    if (query.length < 2) {
      dropdown.style("display", "none");
      return;
    }

    // Search bills by ID (billtype-number) or title
    const matches = Array.from(billMap.values())
      .filter(b => {
        const billId = `${b.billtype}-${b.number}`.toLowerCase();
        const title = (b.title || '').toLowerCase();
        return billId.includes(query) || title.includes(query);
      })
      .slice(0, 10);

    dropdown.selectAll("*").remove();

    if (matches.length === 0) {
      dropdown.style("display", "none");
      return;
    }

    matches.forEach(b => {
      const topic = b.topic || 'Uncategorized';
      const titleShort = b.title.length > 60 ? b.title.substring(0, 60) + '...' : b.title;
      dropdown.append("div")
        .style("padding", "8px 10px")
        .style("cursor", "pointer")
        .style("border-bottom", "1px solid #eee")
        .html(`<strong>${b.billtype}-${b.number}</strong><br><span style="font-size:12px">${titleShort}</span><br><span style="color:#666;font-size:11px">${topic}</span>`)
        .on("mouseover", function () { d3.select(this).style("background", "#f0f0f0"); })
        .on("mouseout", function () { d3.select(this).style("background", "#fff"); })
        .on("click", () => {
          dropdown.style("display", "none");
          input.property("value", `${b.billtype}-${b.number}`);
          billSelection(b.id);
        });
    });

    dropdown.style("display", "block");
  });

  // Hide dropdown when clicking outside
  d3.select("body").on("click.billsearch", (event) => {
    if (!event.target.closest("#bill-search") && !event.target.closest(".bill-search-dropdown")) {
      dropdown.style("display", "none");
    }
  });
}

// Create legend (uses PARTIES config)
function createLegend(svg, width) {
  const legend = svg.append("g")
    .attr("transform", `translate(${width + 20}, 20)`);

  PARTIES.forEach((party, i) => {
    const row = legend.append("g")
      .attr("transform", `translate(0, ${i * 25})`);

    row.append("circle")
      .attr("r", 6)
      .attr("fill", party.color);

    row.append("text")
      .attr("x", 15)
      .attr("y", 5)
      .style("font-size", "13px")
      .text(party.label);
  });
}

// Global indexes for bill/sponsorship lookups
let billMap = new Map();        // bill_id → bill details
let billToMembers = new Map();  // bill_id → [{bioid, spon, date}, ...]
let memberToBills = new Map();  // bioid → [{bill_id, date, spon}, ...]
let memberMap = new Map();      // bioid → member details

async function runVisualization(startDate, endDate, previouspositions, signal) {
  // Fetch and validate data
  const data = await fetchVisualizationData(startDate, endDate, signal);
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  validateData(data, startDate, endDate);

  // Build bill/sponsorship indexes
  billMap = new Map(data.bills.map(b => [b.id, b]));
  memberMap = new Map(data.members.map(m => [m.bioid, m]));
  billToMembers = new Map();
  memberToBills = new Map();

  for (const s of data.sponsorships) {
    if (!billToMembers.has(s.bill_id)) billToMembers.set(s.bill_id, []);
    billToMembers.get(s.bill_id).push({ bioid: s.bioid, spon: s.spon, date: s.date });

    if (!memberToBills.has(s.bioid)) memberToBills.set(s.bioid, []);
    memberToBills.get(s.bioid).push({ bill_id: s.bill_id, date: s.date, spon: s.spon });
  }

  // Compute MDS positions
  const { points } = await computeMDSPositions(data, previouspositions);
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');

  // Chart dimensions
  const margin = { top: 40, right: 150, bottom: 60, left: 60 };
  const width = 800 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const padding = 0.1;
  const scaleAlpha = 1.5;

  // Create chart container elements
  const { canvas, ctx, canvasFaded, ctxFaded, svgElement, svg, chartArea, tooltip } = createChartContainer(margin, width, height);

  // Prepare edge data
  const pointMap = new Map(points.map(p => [p.bioid, p]));
  const topEdges = prepareEdgeData(data.cooccurrenceMatrix, pointMap);

  // Color scale (uses PARTIES config)
  const colorScale = d3.scaleOrdinal()
    .domain(PARTIES.map(p => p.id))
    .range(PARTIES.map(p => p.color));

  // Zoom/pan and selection state
  const state = { zoomLevel: 1, panX: 0, panY: 0, selectedBioid: null, selectedBillId: null };

  // Centralized selection handler - all selection logic in one place
  function setSelection(bioid) {
    console.log("setSelection called with:", bioid);
    state.selectedBioid = bioid;
    persistedSelectedBioid = bioid;

    // Update search input to reflect selection
    const input = d3.select("#member-search");
    if (bioid) {
      const selected = pointMap.get(bioid);
      if (selected) input.property("value", selected.name);
    } else {
      input.property("value", "");
    }

    // Remove existing selection elements
    pointGroup.select(".selection-ring").remove();

    if (bioid) {
      const selected = pointMap.get(bioid);
      const { xScale, yScale} = getScales(state.zoomLevel, state.panX, state.panY);

      // First raise the selected circle to the top
      pointGroup.selectAll("circle")
        .filter(d => d.bioid === bioid)
        .raise();

      // Then append selection ring (so it's on top of the raised circle)
      pointGroup.append("circle")
        .attr("class", "selection-ring")
        .attr("cx", xScale(selected.x))
        .attr("cy", yScale(selected.y))
        .attr("r", STYLES.point.radius * 1.5)
        .attr("fill", "none")
        .attr("stroke", "#ffd000c2")
        .attr("stroke-width", 2);

      // Open side panel with member details
      openSidePanel(selected);
    } else {
      closeMemberPanel();
    }


    // Highlight connected edges and raise them to the top
    const baseEdgeOpacity = state.selectedBillId ? 0.15 : STYLES.edge.opacity;
    edgeGroup.selectAll("line.edge")
      .attr("stroke", d => (d.bioid_1 === bioid || d.bioid_2 === bioid) ? "#333" : STYLES.edge.color)
      .attr("opacity", d => (d.bioid_1 === bioid || d.bioid_2 === bioid) ? 0.8 : baseEdgeOpacity)
      .filter(d => d.bioid_1 === bioid || d.bioid_2 === bioid)
      .raise();
  }

  function billSelection(bill_id) {
    // Highlight all members who sponsored/co-sponsored this bill
    state.selectedBillId = bill_id;

    // Update bill search input to reflect selection
    const input = d3.select("#bill-search");
    if (bill_id) {
      const bill = billMap.get(bill_id);
      if (bill) input.property("value", `${bill.billtype}-${bill.number}`);
    } else {
      input.property("value", "");
    }

    redraw();
    billSidePanel(bill_id);
  }

  // Set global references for side panel access
  currentBillSelection = billSelection;
  currentClearBillSelection = () => {
    state.selectedBillId = null;
    d3.select("#bill-search").property("value", "");
    redraw();
  };
  currentMemberSelection = setSelection;
  currentClearMemberSelection = () => {
    state.selectedBioid = null;
    persistedSelectedBioid = null;
    d3.select("#member-search").property("value", "");
    redraw();
  };

  // Create scale function generator
  const getScales = createScaleFunctions(points, width, height, padding);

  // Create chart groups
  const edgeGroup = chartArea.append("g").attr("class", "edges");
  const pointGroup = chartArea.append("g").attr("class", "points");
  const scaleBarGroup = svg.append("g")
    .attr("class", "scale-bar")
    .attr("transform", `translate(20, ${height - 25})`);

  // Tooltip animation frame tracker
  let tooltipRAF = null;

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", -15)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Congressional Co-sponsorship MDS");

  // Redraw function for SVG elements
  function redraw() {
    const { xScale, yScale } = getScales(state.zoomLevel, state.panX, state.panY);

    // Get highlighted bioids if a bill is selected
    const highlightedBioids = state.selectedBillId
      ? new Set(billToMembers.get(state.selectedBillId)?.map(s => s.bioid) || [])
      : null;

    // Update edges
    edgeGroup.selectAll("line.edge")
      .data(topEdges)
      .join("line")
      .attr("class", "edge")
      .attr("x1", d => xScale(d.x1))
      .attr("y1", d => yScale(d.y1))
      .attr("x2", d => xScale(d.x2))
      .attr("y2", d => yScale(d.y2))
      .attr("stroke", STYLES.edge.color)
      .attr("stroke-width", STYLES.edge.strokeWidth)
      .attr("opacity", highlightedBioids ? 0.15 : STYLES.edge.opacity);

    // Update points
    pointGroup.selectAll("circle")
      .data(points)
      .join("circle")
      .attr("r", STYLES.point.radius)
      .attr("fill", d => colorScale(d.party))
      .attr("opacity", d => {
        if (!highlightedBioids) return STYLES.point.opacity;
        return highlightedBioids.has(d.bioid) ? STYLES.point.opacity : 0.1;
      })
      .attr("stroke", STYLES.point.strokeColor)
      .attr("stroke-width", d => {
        if (!highlightedBioids) return STYLES.point.strokeWidth;
        return highlightedBioids.has(d.bioid) ? 2 : STYLES.point.strokeWidth;
      })
      .style("cursor", "pointer")
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .on("click", (event, d) => {
        console.log("click handler fired", d.bioid);
        event.stopPropagation();
        setSelection(state.selectedBioid === d.bioid ? null : d.bioid);
      })
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`<strong>${d.name}</strong><br>${d.party}-${d.state}-${d.district}`);
      })
      .on("mousemove", (event) => {
        if (tooltipRAF) return;
        tooltipRAF = requestAnimationFrame(() => {
          tooltip.style("transform", `translate(${event.offsetX + 15}px, ${event.offsetY - 10}px)`);
          tooltipRAF = null;
        });
      })
      .on("mouseout", () => {
        if (tooltipRAF) {
          cancelAnimationFrame(tooltipRAF);
          tooltipRAF = null;
        }
        tooltip.style("opacity", 0);
      });

    // Raise highlighted nodes to front during bill selection
    if (highlightedBioids) {
      pointGroup.selectAll("circle")
        .filter(d => highlightedBioids.has(d.bioid))
        .raise();
    }

    // Update scale bar
    renderScaleBar(scaleBarGroup, xScale, width, scaleAlpha);

    // Restore selection visuals if there's a selected node
    if (state.selectedBioid) {
      setSelection(state.selectedBioid);
    }
  }

  // Setup controls and interactions
  setupZoomControls(svg, width, height, state, redraw);
  setupDragBehavior(svgElement, canvas, ctx, canvasFaded, ctxFaded, chartArea, width, height, points, topEdges, colorScale, getScales, state, redraw);
  createLegend(svg, width);

  // Setup search bars
  setupSearchBar(points, setSelection);
  setupBillSearchBar(billSelection);

  // Initial draw
  redraw();

  // Restore persisted selection if the member exists in current data
  if (persistedSelectedBioid && pointMap.has(persistedSelectedBioid)) {
    setSelection(persistedSelectedBioid);
  }

  // Return positions as a Map for alignment on next update
  return new Map(points.map(p => [p.bioid, { x: p.x, y: p.y }]));
}

// Generate snap points: every two weeks, but skip Nov-Feb only around odd-year Jan 3rd dates
function generateSnapDates() {
  const dates = [];
  const twoWeeks = 14 * 24 * 60 * 60 * 1000;

  // Add January 3rd for odd years (congress start dates)
  for (let year = 2009; year <= 2025; year += 2) {
    dates.push(new Date(`${year}-01-03`).getTime());
  }

  // Add every two weeks from March through October for ALL years
  for (let year = 2009; year <= 2025; year++) {
    let current = new Date(`${year}-03-01`).getTime();
    const octEnd = new Date(`${year}-10-31`).getTime();

    while (current <= octEnd) {
      dates.push(current);
      current += twoWeeks;
    }
  }

  // Add Nov-Feb snaps only when next January is EVEN (no Jan 3 congress start)
  for (let year = 2009; year <= 2024; year++) {
    const nextYear = year + 1;
    // Skip if next January has a congress start (odd year)
    if (nextYear % 2 === 1) continue;

    // Add Nov-Dec of current year
    let current = new Date(`${year}-11-01`).getTime();
    const decEnd = new Date(`${year}-12-31`).getTime();
    while (current <= decEnd) {
      dates.push(current);
      current += twoWeeks;
    }

    // Add Jan-Feb of next year
    current = new Date(`${nextYear}-01-01`).getTime();
    const febEnd = new Date(`${nextYear}-02-28`).getTime();
    while (current <= febEnd) {
      dates.push(current);
      current += twoWeeks;
    }
  }

  // Sort chronologically
  dates.sort((a, b) => a - b);
  return dates;
}

const SNAP_DATES = generateSnapDates();

function timestampToDate(ts) {
  return new Date(Number(ts)).toISOString().split("T")[0];
}

// Build noUiSlider range object from snap dates
function buildSnapRange(snapDates) {
  const min = snapDates[0];
  const max = snapDates[snapDates.length - 1];
  const range = { min, max };

  for (let i = 1; i < snapDates.length - 1; i++) {
    const pct = ((snapDates[i] - min) / (max - min)) * 100;
    range[`${pct.toFixed(4)}%`] = snapDates[i];
  }

  return range;
}

// Create controls UI with dual-handle slider
function createControls() {
  const controls = d3.select("#visualization-area")
    .insert("div", "#chart")
    .attr("id", "controls")
    .style("margin", "20px")
    .style("font-family", "sans-serif");

  // Date range label
  controls.append("div")
    .attr("id", "date-label")
    .style("margin-bottom", "10px")
    .style("font-weight", "bold");

  // Slider container
  controls.append("div")
    .attr("id", "date-slider")
    .style("width", "600px")
    .style("margin", "20px 0");

  // Status indicator
  controls.append("span")
    .attr("id", "status")
    .style("margin-left", "20px")
    .style("color", "#666");

  // Initialize noUiSlider
  const slider = document.getElementById("date-slider");
  const startTs = new Date('2017-01-03').getTime();
  const endTs = new Date('2019-01-03').getTime();

  noUiSlider.create(slider, {
    start: [startTs, endTs],
    connect: true,
    snap: true,
    range: buildSnapRange(SNAP_DATES),
    tooltips: [
      { to: timestampToDate },
      { to: timestampToDate }
    ]
  });

  // Move tooltips below the handle and make them smaller
  const tooltipStyle = document.createElement("style");
  tooltipStyle.textContent = `
    .noUi-tooltip {
      bottom: auto !important;
      top: 120% !important;
      font-size: 11px;
      padding: 2px 6px;
    }
  `;
  document.head.appendChild(tooltipStyle);

  // Clear debounce timer when user starts interacting
  slider.noUiSlider.on("start", () => {
    clearTimeout(debounceTimer);
  });

  // Update label on any slider movement
  slider.noUiSlider.on("update", (values) => {
    const start = timestampToDate(values[0]);
    const end = timestampToDate(values[1]);
    d3.select("#date-label").text(`Date Range: ${start} to ${end}`);

    // Reset debounce - only fires after slider stops moving
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updateVisualization, 1000);
  });

  return slider;
}

let sliderElement = null;
let debounceTimer = null;
let persistedSelectedBioid = null;
let previousPositions = null;
let currentAbortController = null;

async function updateVisualization() {
  // Abort any in-progress update
  if (currentAbortController) {
    currentAbortController.abort();
  }
  currentAbortController = new AbortController();
  const signal = currentAbortController.signal;

  const values = sliderElement.noUiSlider.get();
  const startDate = timestampToDate(values[0]);
  const endDate = timestampToDate(values[1]);

  d3.select("#status").text("Loading...").style("color", "#666");

  try {
    const newPositions = await runVisualization(startDate, endDate, previousPositions, signal);
    previousPositions = newPositions;
    d3.select("#status").text("");
  } catch (err) {
    // Ignore abort errors - a new update is taking over
    if (err.name === 'AbortError') return;

    d3.select("#status").text("Error: " + err.message).style("color", "red");
    console.error("Visualization error:", err);
  }
}

// Initialize
sliderElement = createControls();
updateVisualization();
