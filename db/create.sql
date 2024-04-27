CREATE TABLE IF NOT EXISTS "seminarium_note" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255),
    "content" TEXT,
    "last_modified" TIMESTAMP
);
