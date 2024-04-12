package driver

type APIDriver struct{}

type APIDriverInterface interface {
	Post()
}

func NewAPIDriver() APIDriverInterface {
	return &APIDriver{}
}

func (d *APIDriver) Post() {
	// ここに実装
}
