package main

import (
	"api/driver/dao"
	"context"
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.CORS())

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	e.GET("/users", func(c echo.Context) error {
		ctx := context.Background()
		err := godotenv.Load(".env")

		db_host := os.Getenv("DB_HOST")
		db_port := os.Getenv("DB_PORT")
		db_user := os.Getenv("DB_USER")
		db_password := os.Getenv("DB_PASSWORD")
		db_name := os.Getenv("DB_NAME")

		// DEBUG
		fmt.Println(os.Getenv("DB_HOST"))
		fmt.Println(os.Getenv("DB_PORT"))
		fmt.Println(os.Getenv("DB_USER"))
		fmt.Println(os.Getenv("DB_PASSWORD"))
		fmt.Println(os.Getenv("DB_NAME"))

		connStr := "host=" + db_host + " user=" + db_user + " dbname=" + db_name + " password=" + db_password + " port=" + db_port + " sslmode=disable"

		db, err := sql.Open("postgres", connStr)

		if err != nil {
			return err
		}

		queries := dao.New(db)

		users, err := queries.GetAllUser(ctx)

		log.Println(users)
		return c.JSON(http.StatusOK, users)
	})

	e.Logger.Fatal(e.Start(":1323"))
}
