package gateway

import "go-mock-test/domain"

func updateUser(user *domain.User) error {
	return driver.Update(user)
}
