package port

import "github.com/nu0ma/sandbox/go-playground/trial-echo/domain"

type UserPort interface {
	GetUsers() (*[]domain.User, error)
}
