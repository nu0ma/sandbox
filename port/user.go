package port

import (
	"go-mock-test/domain"

	"github.com/labstack/echo/v4"
)

type UserPort interface {
	GetUser(ctx echo.Context, id int) (domain.User, error)
}
