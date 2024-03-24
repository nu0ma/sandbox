package config

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"

	_ "github.com/lib/pq"
)

var Conn *pgxpool.Pool

func InitConnection() {
	// TODO:CONFIG
	conn, err := pgxpool.New(context.Background(), "postgresql://postgres:postgres@localhost:5432/postgres")
	// TODO:PING
	if err != nil {
		panic("Cannot connect to database")
	}

	Conn = conn
}
