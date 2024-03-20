package port

import (
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
)

type TodoPort interface {
	GetTodo(ctx echo.Context) (domain.Todo, error)
}
