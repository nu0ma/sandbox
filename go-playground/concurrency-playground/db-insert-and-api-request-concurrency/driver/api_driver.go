package driver

import (
	"fmt"
	"net/http"
)

type APIDriver struct{}

type APIDriverInterface interface {
	Post() error
}

func NewAPIDriver() APIDriverInterface {
	return &APIDriver{}
}

func (d *APIDriver) Post() error {
	fmt.Println("posted1")
	resp, err := http.Get("http://localhost:1324/ping")
	// resp, err := http.Post("https://jsonplaceholder.typicode.com/posts", "application/json", nil)
	if err != nil {
		return fmt.Errorf("failed to post: %w", err)
	}
	defer resp.Body.Close()

	fmt.Println(resp.Status)
	fmt.Println("posted2")
	return err
}
