package port

import (
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
)

type UserPort interface {
	GetUsers(ctx echo.Context) (*[]domain.User, error)
}
