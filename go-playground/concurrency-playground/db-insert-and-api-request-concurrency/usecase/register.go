package usecase

import (
	"db-insert-and-api-request-concurrency/driver"
	"fmt"
)

type RegisterUsecase struct {
	dbDriver  driver.DBDriverInterface
	apiDriver driver.APIDriverInterface
}

func NewRegisterUsecase(dbDriver driver.DBDriverInterface, apiDriver driver.APIDriverInterface) *RegisterUsecase {
	return &RegisterUsecase{
		dbDriver:  dbDriver,
		apiDriver: apiDriver,
	}
}

func (u *RegisterUsecase) Register() error {
	fmt.Println("Registering...")
	return nil
}
