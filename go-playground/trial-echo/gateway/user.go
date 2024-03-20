package gateway

import (
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

type UserGateway struct {
	driver driver.IDBDriver
}

func NewUserGateway(driver driver.IDBDriver) port.UserPort {
	return &UserGateway{
		driver: driver,
	}
}

func (g UserGateway) GetUsers(ctx echo.Context) (*[]domain.User, error) {
	resp, err := g.driver.GetUsers()
	if err != nil {
		return nil, err
	}

	users := make([]domain.User, len(resp))
	for i, u := range resp {
		users[i] = domain.User{
			Name: u.Name,
		}
	}

	return &users, nil

}
