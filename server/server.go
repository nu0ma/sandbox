package server

import (
	"context"
	"database/sql"
	"go-mock-test/config"
	"go-mock-test/repository/dao"

	"log"

	_ "github.com/lib/pq"
)

func Run() error {
	ctx := context.Background()

	connStr := config.ConnectionURL
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		return err
	}

	queries := dao.New(db)
	users, err := queries.GetUser(ctx, 1)

	log.Println(users.Name)
	return nil
}
