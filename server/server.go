package server

import (
	"context"
	"go-mock-test/rest"
	"log"

	_ "github.com/lib/pq"
)

func Run() error {

	ctx := context.Background()
	users := rest.UserHandler(ctx)

	log.Println(users.Name)
	return nil
}
