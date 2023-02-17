package repository

import (
	"context"
	"database/sql"
	"go-mock-test/config"
	"go-mock-test/repository/dao"
	"log"
)

func GetUser(id int, ctx context.Context) dao.User {
	db, err := sql.Open("postgres", config.ConnectionURL)

	if err != nil {
		log.Fatal(err)
	}

	queries := dao.New(db)
	users, err := queries.GetUser(ctx, 1)

	return users

}
