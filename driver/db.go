package driver

import "go-mock-test/domain"

type User interface {
	Update(user *domain.User) error
}
