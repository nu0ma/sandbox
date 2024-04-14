package main

import (
	"db-insert-and-api-request-concurrency/config"
	"db-insert-and-api-request-concurrency/driver"
	"db-insert-and-api-request-concurrency/usecase"
)

func main() {
	dsn := "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable"
	conn, err := config.CreateConnection(dsn)
	if err != nil {
		panic(err)
	}

	defer conn.Close()

	dbDriver := driver.NewDBDriver(conn)
	apiDriver := driver.NewAPIDriver()

	registerUsecase := usecase.NewRegisterUsecase(dbDriver, apiDriver)
	registerUsecase.Register()

}
