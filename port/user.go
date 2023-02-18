package port

import (
	"context"
	"go-mock-test/domain"
)

type UserPort interface {
	GetUser(ctx context.Context, id int) (domain.User, error)
}
