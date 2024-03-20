package driver

type DBDriver struct{}

type TodoResponse struct {
	Title string
}

type User struct {
	Name string
}

type UsersResponse = []User

type IDBDriver interface {
	GetTodo() (TodoResponse, error)
	GetUsers() (UsersResponse, error)
}

func NewDBDriver() IDBDriver {
	return &DBDriver{}
}

func (d *DBDriver) GetTodo() (TodoResponse, error) {
	return TodoResponse{
		Title: "hoge",
	}, nil
}

func (d *DBDriver) GetUsers() (UsersResponse, error) {
	return []User{
		{
			Name: "hoge",
		},
		{
			Name: "fuga",
		},
		{
			Name: "free",
		},
	}, nil
}
