package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/logger"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/middleware"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/route"
)

func main() {
	e := echo.New()
	logger.Init()
	middleware.NewLoggingMiddleware(e)
	route.InitRoute(e)

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
