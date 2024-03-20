-- name: GetAllUser :many
select *
from users;


-- name: GetUser :one
select *
from users
where id = ?;