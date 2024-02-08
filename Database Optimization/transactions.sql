SELECT
    u.user_id,
    u.name,
    u.email,
    SUM(t.amount) AS total_transactions
FROM
    transactions t
JOIN
    users u ON t.user_id = u.user_id
GROUP BY
    u.user_id, u.name, u.email;

-- assuming that the users detail are stored in another table called users