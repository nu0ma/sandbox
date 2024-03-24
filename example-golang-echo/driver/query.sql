-- name: GetUsers :many
SELECT * FROM users
ORDER BY name;

-- name: GetTodo :one
SELECT * FROM todos limit 1
;