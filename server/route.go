package server

import (
	"go-mock-test/rest"
	"net/http"

	"github.com/labstack/echo/v4"
)

func UserRoute(e *echo.Echo) {
	e.GET("/", func(c echo.Context) error {
		users := rest.UserHandler(c)
		return c.JSON(http.StatusOK, users)
	})
}
