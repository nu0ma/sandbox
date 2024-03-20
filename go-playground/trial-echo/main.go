package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/handler"
)

func main() {

	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "hello")
	})
	e.GET("/todo", handler.GetTodo)

	e.Logger.Fatal(e.Start(":1323"))

}
