package rest

import (
	"github.com/labstack/echo/v4"
	usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/todo"
)

func Get(e echo.Context ) error {
	usecase := usecase.NewTodoUsecase()
	return resp

}