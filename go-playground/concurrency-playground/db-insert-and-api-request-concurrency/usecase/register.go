package usecase

import (
	"db-insert-and-api-request-concurrency/driver"
	"fmt"
	"sync"
)

type RegisterUsecase struct {
	dbDriver  driver.DBDriverInterface
	apiDriver driver.APIDriverInterface
}

type Result struct {
	Error error
}

func NewRegisterUsecase(dbDriver driver.DBDriverInterface, apiDriver driver.APIDriverInterface) *RegisterUsecase {
	return &RegisterUsecase{
		dbDriver:  dbDriver,
		apiDriver: apiDriver,
	}
}

func (u *RegisterUsecase) Register(done <-chan interface{}) error {

	var wg sync.WaitGroup
	var registerError error

	wg.Add(2)

	go func() {
		defer wg.Done()
		err := u.dbDriver.Post()
		if err != nil {
			registerError = err
			fmt.Println(err)
		}
	}()

	go func() {
		defer wg.Done()
		err := u.apiDriver.Post()
		if err != nil {
			registerError = err
			fmt.Println(err)
		}
	}()

	wg.Wait()

	return registerError
}
