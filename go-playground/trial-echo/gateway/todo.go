package gateway

import (
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

type TodoGateway struct {
	driver driver.IDBDriver
}

func NewTodoGateway(driver driver.IDBDriver) port.TodoPort {
	return &TodoGateway{
		driver: driver,
	}
}

func (g *TodoGateway) GetTodo(ctx echo.Context) (*domain.Todo, error) {
	resp, err := g.driver.GetTodo()
	if err != nil {
		return nil, err
	}

	todo := &domain.Todo{
		Title: resp.Title,
	}

	return todo, nil

}
