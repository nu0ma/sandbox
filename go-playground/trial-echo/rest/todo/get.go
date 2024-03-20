package rest

import (
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/gateway"
	usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/todo"
)

func Get(e echo.Context) (*domain.Todo, error) {
	driver := driver.NewDBDriver()
	gateway := gateway.NewTodoGateway(driver)
	usecase := usecase.NewTodoUsecase(gateway)
	resp, err := usecase.GetTodo(e)
	if err != nil {
		return nil, err
	}

	return resp, nil
}
