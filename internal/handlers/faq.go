package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type FAQItems struct {
	Question string
}

func FAQHandler(c echo.Context) error {
	questions := []FAQItems{
		{"What type of power outlets do you use? Do I need a special adapter?"},
		{"How late are your bars open, and when can I buy alcohol?"},
		{"At what age are you allowed to dring?"},
		{"What languages are spoken on the Island?"},
		{"What happens if I get sick, where would I go?"},
		{"How concerned should we be about our personal safety and security?"},
		{"What days are restruants and attractions open or closed?"},
		{"What currency is accepted at your businesss establishments?"},
	}
	return c.Render(http.StatusOK, "base", map[string]any{
		"CurrentPath": c.Path(),
		"Questions":   questions,
	})
}
