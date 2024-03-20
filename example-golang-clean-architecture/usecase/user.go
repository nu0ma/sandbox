package usecase

import (
	"go-mock-test/domain"
	"go-mock-test/port"

	"github.com/labstack/echo/v4"
)

type UserUsecase struct {
	port port.UserPort
}

func NewUserUsecase(port port.UserPort) *UserUsecase {
	return &UserUsecase{
		port: port,
	}
}

func (u *UserUsecase) GetUser(ctx echo.Context, id int) (domain.User, error) {
	return u.port.GetUser(ctx, id)
}
