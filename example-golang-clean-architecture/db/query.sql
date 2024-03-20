-- name: GetUser :one
select *
from users
where id = $1;

-- name: ListUsers :many
select *
from users;

-- name: CreateUser :one
insert into users (name, email)
values ($1, $2)
RETURNING *;

-- name: DeleteUser :exec
delete from users
where id = $1;
