package usecase

import (
	"context"

	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

type UserUsecase struct {
	port port.UserPort
}

func NewUserUsecase(port port.UserPort) *UserUsecase {
	return &UserUsecase{
		port: port,
	}
}

func (u *UserUsecase) GetUsers(ctx context.Context) (*[]domain.User, error) {
	resp, err := u.port.GetUsers(ctx)
	return resp, err
}
