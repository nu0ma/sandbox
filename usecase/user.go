package usecase

import (
	"context"
	"go-mock-test/repository"
	"go-mock-test/repository/dao"
)

func GetUser(id int, ctx context.Context) dao.User {
	users := repository.GetUser(id, ctx)

	return users
}
