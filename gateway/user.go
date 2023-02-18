package gateway

import (
	"context"
	"database/sql"
	"go-mock-test/domain"
	"go-mock-test/driver/dao"
)

type UserGateway struct {
	driver *dao.Queries
}

func NewUserGateway(conn *sql.DB) *UserGateway {
	return &UserGateway{
		driver: dao.New(conn),
	}
}

func (g *UserGateway) GetUser(ctx context.Context, id int) (domain.User, error) {

	result, err := g.driver.GetUser(ctx, int32(id))

	if err != nil {
		return domain.User{}, nil
	}

	return domain.User{
		ID:    result.ID,
		Email: result.Email.String,
		Name:  result.Name,
	}, nil
}
