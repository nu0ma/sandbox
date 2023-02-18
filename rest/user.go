package rest

import (
	"database/sql"
	"fmt"
	"go-mock-test/config"
	"go-mock-test/domain"
	"go-mock-test/gateway"
	"go-mock-test/usecase"

	"github.com/labstack/echo/v4"
)

func UserHandler(ctx echo.Context) domain.User {
	db, err := sql.Open("postgres", config.ConnectionURL)

	if err != nil {
		fmt.Println(err)
	}

	userGateway := gateway.NewUserGateway(db)
	userUsecase := usecase.NewUserUsecase(userGateway)
	users, err := userUsecase.GetUser(ctx, 9)

	return users
}
