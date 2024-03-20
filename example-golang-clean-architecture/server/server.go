package server

import (
	"log"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	_ "github.com/lib/pq"
)

func Run() error {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	UserRoute(e)

	e.Logger.Fatal(e.Start(":1323"))
	log.Println("Access")

	return nil
}
