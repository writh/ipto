INSERT INTO locations(
    id,
    name,
    coordinates,
    address,
    zip,
    state
)
VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
)