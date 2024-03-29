package main

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/concurrency-2/driver"
)

func Register(c echo.Context) error {

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		driver.RegisterDB()
		wg.Done()
	}()

	go func() {
		driver.RegisterAPI()
		wg.Done()
	}()

	wg.Wait()

	return c.String(http.StatusOK, "hello")
}

func main() {
	fmt.Println("Hello, World!")
	e := echo.New()

	e.POST("/register", Register)

	e.Logger.Fatal(e.Start(":1324"))
}
