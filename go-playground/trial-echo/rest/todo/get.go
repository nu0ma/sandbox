package rest

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/gateway"
	todo_usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/todo"
	user_usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/user"
)

func GetTodo(e echo.Context) error {
	driver := driver.NewDBDriver()
	gateway := gateway.NewTodoGateway(driver)
	usecase := todo_usecase.NewTodoUsecase(gateway)
	resp, err := usecase.GetTodo(e)

	if err != nil {
		return err
	}

	return e.JSON(http.StatusOK, resp)
}

func GetUsers(e echo.Context) error {
	driver := driver.NewDBDriver()
	gateway := gateway.NewUserGateway(driver)
	usecase := user_usecase.NewUserUsecase(gateway)

	res, err := usecase.GetUsers()

	if err != nil {
		return err
	}

	return e.JSON(http.StatusOK, res)
}
