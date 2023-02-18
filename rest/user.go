package rest

import (
	"context"
	"database/sql"
	"fmt"
	"go-mock-test/config"
	"go-mock-test/domain"
	"go-mock-test/gateway"
	"go-mock-test/usecase"
)

func UserHandler(ctx context.Context) domain.User {
	db, err := sql.Open("postgres", config.ConnectionURL)

	if err != nil {
		fmt.Println(err)
	}

	userGateway := gateway.NewUserGateway(db)
	userUsecase := usecase.NewUserUsecase(userGateway)
	users, err := userUsecase.GetUser(ctx, 1)

	return users
}
