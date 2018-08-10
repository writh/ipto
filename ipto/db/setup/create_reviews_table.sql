CREATE TABLE "reviews"(
    id SERIAL PRIMARY KEY,
    location_id INT NOT NULL REFERENCES "location" (id),
    user_id INT NOT NULL REFERENCES "users" (id),
    stars NUMERIC(5, 1) NOT NULL,
    clean NUMERIC(5, 1),
    purchase BOOLEAN,
    handicap BOOLEAN,
    gender TEXT,
    occupancy NUMERIC
);