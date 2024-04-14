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
	errorChan := make(chan error, 2)

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		err := u.dbDriver.Post()
		if err != nil {
			select {
			case errorChan <- err:
			case <-done:
				return
			}

			fmt.Println(err)
		}
	}()

	go func() {
		defer wg.Done()
		err := u.apiDriver.Post()
		if err != nil {
			select {
			case errorChan <- err:
			case <-done:
				return
			}
		}
	}()

	wg.Wait()
	close(errorChan)

	return <-errorChan

}
