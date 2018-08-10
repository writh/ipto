CREATE TABLE "location"(
    id SERIAL PRIMARY KEY,
    name TEXT,
    coordinates POINT,
    address TEXT,
    zip NUMERIC(5, 0) NOT NULL,
    state VARCHAR(2) NOT NULL
);