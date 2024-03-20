package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
	rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/todo"
)

func GetTodo(c echo.Context) error {
	resp, err := rest.Get(c)

	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, resp)
}
