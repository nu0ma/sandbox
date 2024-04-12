package driver

type DBDriver struct{}

type DBDriverInterface interface {
	Post()
}

func NewDBDriver() DBDriverInterface {
	return &DBDriver{}
}

func (d *DBDriver) Post() {
	// ここに実装
}
