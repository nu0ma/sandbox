package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var ConnectionURL string

func InitDB() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatalf("Failed load .env File: %v", err)
	}

	db_host := os.Getenv("DB_HOST")
	db_port := os.Getenv("DB_PORT")
	db_user := os.Getenv("DB_USER")
	db_password := os.Getenv("DB_PASSWORD")
	db_name := os.Getenv("DB_NAME")

	ConnectionURL = "host=" + db_host + " user=" + db_user + " dbname=" + db_name + " password=" + db_password + " port=" + db_port + " sslmode=disable"
}

func getDBConfig() string {
	return ConnectionURL
}
