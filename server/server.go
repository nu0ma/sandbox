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
	db, err := sql.Open(config.ConnectionURL)
	userGateway := gateway.NewUserGateway()

	users := usecase.NewUserUsecase()

	log.Println(users.Name)
	return nil
}
