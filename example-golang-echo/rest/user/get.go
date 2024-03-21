package rest

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/gateway"
	usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/user"
)

func GetUsers(e echo.Context) error {
	driver := driver.NewDBDriver()
	gateway := gateway.NewUserGateway(driver)
	usecase := usecase.NewUserUsecase(gateway)

	res, err := usecase.GetUsers(e)

	if err != nil {
		return err
	}

	return e.JSON(http.StatusOK, res)
}
