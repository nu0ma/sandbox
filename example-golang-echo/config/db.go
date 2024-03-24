package config

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/logger"
	"github.com/spf13/viper"

	_ "github.com/lib/pq"
)

var Conn *pgxpool.Pool

func InitConnection() {

	viper.SetDefault("DB_HOST", "localhost")
	viper.SetDefault("DB_PORT", "5432")
	viper.SetDefault("DB_USER", "postgres")
	viper.SetDefault("DB_PASSWORD", "postgres")
	viper.SetDefault("DB_NAME", "postgres")

	host := viper.GetString("DB_HOST")
	port := viper.GetString("DB_PORT")
	user := viper.GetString("DB_USER")
	password := viper.GetString("DB_PASSWORD")
	dbname := viper.GetString("DB_NAME")

	dsn := fmt.Sprintf("postgresql://%s:%s@%s:%s/%s", user, password, host, port, dbname)

	conn, err := pgxpool.New(context.Background(), dsn)

	if err != nil {
		logger.Logger.Error("Cannot connect to database")
	}

	if err = conn.Ping(context.Background()); err != nil {
		logger.Logger.Error("Cannot ping to database: %v", err)
		return
	}

	Conn = conn
}
