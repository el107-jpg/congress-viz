PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE house_members (
    congress INTEGER,
    bioid TEXT,
    name TEXT,
    party TEXT,
    state TEXT,
    district TEXT
  );
CREATE TABLE house_bills (
    id INTEGER PRIMARY KEY,
    billtype TEXT,
    number INTEGER,
    congress INTEGER,
    title TEXT,
    topic TEXT
  , synced_date TEXT);
CREATE TABLE house_sponsorships (
    bill_id INTEGER,
    bioid TEXT,
    date TEXT,
    spon INTEGER
  );
CREATE TABLE co_occurrences (
    bioid_1 TEXT,
    date TEXT,
    bioid_2 TEXT
  );
CREATE UNIQUE INDEX idx_bills_unique ON house_bills(billtype, number, congress);
CREATE UNIQUE INDEX idx_members_unique ON house_members(congress, bioid);
CREATE UNIQUE INDEX idx_sponsorships_unique ON house_sponsorships(bill_id, bioid);
CREATE UNIQUE INDEX idx_cooccurrences_unique ON co_occurrences(bioid_1, date, bioid_2);
CREATE INDEX idx_members_bioid ON house_members(bioid);
CREATE INDEX idx_members_congress ON house_members(congress);
CREATE INDEX idx_sponsorships_bill ON house_sponsorships(bill_id);
CREATE INDEX idx_sponsorships_bioid ON house_sponsorships(bioid);
CREATE INDEX idx_sponsorships_date ON house_sponsorships(date);
CREATE INDEX idx_cooccurrences_date ON co_occurrences(date);
CREATE INDEX idx_cooccurrences_date_bioid ON co_occurrences(date, bioid_1, bioid_2);
CREATE INDEX idx_bills_congress ON house_bills(congress);
