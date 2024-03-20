package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/todo"
)

func main() {

	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "hello")
	})
	e.GET("/todo", rest.GetTodo)

	e.Logger.Fatal(e.Start(":1323"))

}
