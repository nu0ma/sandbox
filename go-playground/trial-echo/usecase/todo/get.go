package usecase

import (
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

type TodoUsecase struct {
	port port.TodoPort
}

func NewTodoUsecase(port port.TodoPort) *TodoUsecase {
	return &TodoUsecase{
		port: port,
	}
}

func (u *TodoUsecase) GetTodo(ctx echo.Context) (domain.Todo, error) {
	todo, err := u.port.GetTodo(ctx)
	return todo, err
}
