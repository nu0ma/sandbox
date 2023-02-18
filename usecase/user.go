package usecase

import (
	"context"
	"go-mock-test/domain"
	"go-mock-test/port"
)

type UserUsecase struct {
	port port.UserPort
}

func NewUserUsecase(port port.UserPort) *UserUsecase {
	return &UserUsecase{
		port: port,
	}
}

func (u *UserUsecase) GetUser(ctx context.Context, id int) (domain.User, error) {
	return u.port.GetUser(ctx, id)
}
