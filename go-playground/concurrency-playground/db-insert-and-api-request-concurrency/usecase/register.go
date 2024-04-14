package usecase

import (
	"db-insert-and-api-request-concurrency/driver"
	"fmt"
)

type RegisterUsecase struct {
	db_driver  driver.DBDriverInterface
	api_driver driver.APIDriverInterface
}

func NewRegisterUsecase(db_driver driver.DBDriverInterface, api_driver driver.APIDriverInterface) *RegisterUsecase {
	return &RegisterUsecase{
		db_driver:  db_driver,
		api_driver: api_driver,
	}
}

func (u *RegisterUsecase) Register() error {
	fmt.Println("Registering...")
	return nil
}
