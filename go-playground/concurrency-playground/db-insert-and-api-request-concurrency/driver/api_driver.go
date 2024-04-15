package driver

import (
	"fmt"
	"net/http"
)

type APIDriver struct{}

//go:generate mockery --name API
type APIDriverInterface interface {
	Post() error
}

func NewAPIDriver() APIDriverInterface {
	return &APIDriver{}
}

func (d *APIDriver) Post() error {
	resp, err := http.Post("https://jsonplaceholder.typicode.com/posts", "application/json", nil)
	if err != nil {
		return fmt.Errorf("failed to post: %w", err)
	}
	defer resp.Body.Close()

	fmt.Println(resp.Status)
	return err
}
