package driver

type DBDriver struct{}

type TodoResponse struct {
	Title string
}

type IDBDriver interface {
	GetTodo() (TodoResponse, error)
}

func NewDBDriver() IDBDriver {
	return &DBDriver{}
}

func (d *DBDriver) GetTodo() (TodoResponse, error) {
	return TodoResponse{
		Title: "hoge",
	}, nil
}
