package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func TransportHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "base", map[string]any{
		"CurrentPath": c.Path(),
	})
}
