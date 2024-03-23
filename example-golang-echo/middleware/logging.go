package middleware

import (
	"context"
	"log/slog"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/logger"
)

func NewLoggingMiddleware(e *echo.Echo) {
	e.Use(middleware.RequestLoggerWithConfig(
		middleware.RequestLoggerConfig{
			LogStatus:   true,
			LogURI:      true,
			LogError:    true,
			HandleError: true,
			LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
				if v.Error == nil {
					logger.Logger.LogAttrs(context.Background(), slog.LevelInfo, "REQUEST",
						slog.String("uri", v.URI),
						slog.Int("status", v.Status),
					)
				} else {
					logger.Logger.LogAttrs(context.Background(), slog.LevelError, "REQUEST_ERROR",
						slog.String("uri", v.URI),
						slog.Int("status", v.Status),
						slog.String("err", v.Error.Error()),
					)
				}
				return nil
			},
		},
	))
}
