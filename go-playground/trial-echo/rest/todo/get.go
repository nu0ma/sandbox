package rest

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/gateway"
	usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/todo"
)

func GetTodo(e echo.Context) error {
	driver := driver.NewDBDriver()
	gateway := gateway.NewTodoGateway(driver)
	usecase := usecase.NewTodoUsecase(gateway)
	resp, err := usecase.GetTodo(e)

	if err != nil {
		return err
	}

	return e.JSON(http.StatusOK, resp)
}
