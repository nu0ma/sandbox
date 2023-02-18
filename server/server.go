package server

import (
	"context"
	"database/sql"
	"go-mock-test/config"
	"go-mock-test/gateway"
	"go-mock-test/usecase"

	"log"

	_ "github.com/lib/pq"
)

func Run() error {
	ctx := context.Background()
	db, err := sql.Open("postgres", config.ConnectionURL)

	if err != nil {
		return nil
	}
	userGateway := gateway.NewUserGateway(db)
	userUsecase := usecase.NewUserUsecase(userGateway)

	users, err := userUsecase.GetUser(ctx, 1)

	log.Println(users.Name)
	return nil
}
