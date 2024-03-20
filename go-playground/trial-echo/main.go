package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/middleware"
	rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/todo"
)

func main() {

	e := echo.New()

	middleware.NewLoggingMiddleware(e)

	e.GET("/v1/systems/ping", func(c echo.Context) error {
		return c.String(http.StatusOK, "pong")
	})

	e.GET("/todo", rest.GetTodo)

	e.Logger.Fatal(e.Start(":1323"))

}
