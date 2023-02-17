package server

import (
	"context"
	"go-mock-test/usecase"

	"log"

	_ "github.com/lib/pq"
)

func Run() error {
	ctx := context.Background()

	users := usecase.GetUser(1, ctx)

	log.Println(users.Name)
	return nil
}
