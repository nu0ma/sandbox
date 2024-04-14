package usecase

import (
	"db-insert-and-api-request-concurrency/driver"
	"fmt"
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
	resultChan := make(chan Result)
	defer close(resultChan)

	go func() {
		err := u.dbDriver.Post()

		for {
			select {
			case <-done:
				return
			case resultChan <- Result{Error: err}:
			}
		}
	}()

	go func() {
		err := u.apiDriver.Post()
		for {
			select {
			case <-done:
				return
			case resultChan <- Result{Error: err}:
			}
		}
	}()

	var t Result
	for i := 0; i < 2; i++ {
		select {
		case <-done:
			fmt.Println("cancelled")
			return nil
		case t = <-resultChan:
			if t.Error != nil {
				return fmt.Errorf("failed to register: %w", t.Error)
			}
		}
	}

	return t.Error
}
