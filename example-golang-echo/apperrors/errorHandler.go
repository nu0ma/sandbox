package apperrors

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/logger"
)

func ErrorHandler(e echo.Context, err error) error {
	var appError *AppError
	if !errors.As(err, &appError) {
		appError = &AppError{
			ErrCode: Unknown,
			Message: "unknown error",
			Err:     err,
		}
	}

	jsonBytes, _ := json.Marshal(appError)
	json := string(jsonBytes)

	switch appError.ErrCode {
	case FindDataFailed:
		logger.Logger.Error(string(json))
		return echo.NewHTTPError(http.StatusNotFound, appError.Message)
	case NAData:
		logger.Logger.Error(string(json))
		return echo.NewHTTPError(http.StatusNotFound, appError.Message)
	default:
		logger.Logger.Error(string(json))
		return echo.NewHTTPError(http.StatusInternalServerError, appError.Message)
	}
}
