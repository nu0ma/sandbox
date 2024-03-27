package port

import (
	"context"

	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
)

type UserPort interface {
	GetUsers(ctx context.Context) (*[]domain.User, error)
}
