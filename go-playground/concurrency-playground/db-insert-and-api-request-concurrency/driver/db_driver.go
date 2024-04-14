package driver

import (
	"database/sql"

	_ "github.com/lib/pq"
)

type DBDriver struct {
	conn *sql.DB
}

type DBDriverInterface interface {
	Post() error
}

func NewDBDriver(conn *sql.DB) DBDriverInterface {
	return &DBDriver{
		conn: conn,
	}
}

func (d *DBDriver) Post() error {
	_, err := d.conn.Query("INSERT INTO users (name) VALUES ('test')")
	if err != nil {
		return err
	}
	return nil
}
