package driver

import (
	"database/sql"
	"fmt"

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
	_, err := d.conn.Query("INSERT INTO users (name, email, password) VALUES  ('Charlie', 'hoge3@example.com', 'password');")
	if err != nil {
		return err
	}

	fmt.Println("inserted")

	return nil
}
