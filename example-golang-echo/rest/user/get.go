package rest

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/apperrors"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/config"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver/dao"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/gateway"
	usecase "github.com/nu0ma/sandbox/go-playground/trial-echo/usecase/user"
)

func GetUsers(e echo.Context) error {

	ctx := e.Request().Context()

	driver := dao.New(config.Conn)
	gateway := gateway.NewUserGateway(driver)
	usecase := usecase.NewUserUsecase(gateway)

	res, err := usecase.GetUsers(ctx)

	if err != nil {
		return apperrors.ErrorHandler(e, err)
	}

	return e.JSON(http.StatusOK, res)
}
