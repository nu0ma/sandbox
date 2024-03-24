package gateway

import (
	"context"

	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver/dao"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

type UserGateway struct {
	driver dao.Querier
}

func NewUserGateway(driver dao.Querier) port.UserPort {
	return &UserGateway{
		driver: driver,
	}
}

func (g UserGateway) GetUsers(ctx context.Context) (*[]domain.User, error) {
	resp, err := g.driver.GetUsers(ctx)
	if err != nil {
		return nil, err
	}

	users := make([]domain.User, len(resp))
	for i, u := range resp {
		users[i] = domain.User{
			Name:  u.Name,
			Email: u.Email,
		}
	}

	return &users, nil

}
