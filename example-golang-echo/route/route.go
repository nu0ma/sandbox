package route

import (
	"net/http"

	"github.com/labstack/echo/v4"
	todo_rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/todo"
	user_rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/user"
)

func InitRoute(e *echo.Echo) {
	e.GET("/v1/systems/ping", func(c echo.Context) error {
		return c.String(http.StatusOK, "pong")
	})

	e.GET("/todo", todo_rest.GetTodo)
	e.GET("/users", user_rest.GetUsers)
}
