package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/middleware"
	todo_rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/todo"
	user_rest "github.com/nu0ma/sandbox/go-playground/trial-echo/rest/user"
)

func main() {
	e := echo.New()
	middleware.NewLoggingMiddleware(e)

	e.GET("/v1/systems/ping", func(c echo.Context) error {
		return c.String(http.StatusOK, "pong")
	})

	e.GET("/todo", todo_rest.GetTodo)
	e.GET("/users", user_rest.GetUsers)

	// Graceful ShutDown
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	go func() {
		if err := e.Start(":1323"); err != nil && err != http.ErrServerClosed {
			e.Logger.Fatal("shutting down the server")
		}
	}()

	<-ctx.Done()
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := e.Shutdown(ctx); err != nil {
		e.Logger.Fatal(err)
	}
}
