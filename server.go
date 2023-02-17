package main

import (
	"context"
	"database/sql"
	"fmt"
	"go-mock-test/driver/dao"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

// import "github.com/labstack/echo/v4"

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run() error {
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

	users, err := queries.GetUser(ctx, 1)

	log.Println(users)
	return nil
}
