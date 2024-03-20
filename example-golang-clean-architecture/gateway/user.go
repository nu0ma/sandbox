package gateway

import (
	"context"
	"database/sql"
	"go-mock-test/domain"
	"go-mock-test/driver/dao"
	"net/http"

	"github.com/labstack/echo/v4"
)

type UserGateway struct {
	driver *dao.Queries
}

func NewUserGateway(conn *sql.DB) *UserGateway {
	return &UserGateway{
		driver: dao.New(conn),
	}
}

func (g *UserGateway) GetUser(ctx echo.Context, id int) (domain.User, error) {
	result, err := g.driver.GetUser(context.Background(), int32(id))

	if err != nil {
		println(err.Error())
		ctx.JSON(http.StatusNotFound, err.Error())
		// return nil
		return domain.User{}, err
	}

	return domain.User{
		ID:    result.ID,
		Email: result.Email.String,
		Name:  result.Name,
	}, nil
}
