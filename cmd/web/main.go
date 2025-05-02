package main

import (
	"html/template"
	"io"
	"os"
	"path/filepath"
	"strings"
	"taniti-island/internal/handlers"

	"github.com/labstack/echo/v4"
)

type TemplateRenderer struct {
	templates *template.Template
}

func (t *TemplateRenderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func isDevMode() bool {
	mode := os.Getenv("APP_ENV")
	return strings.ToLower(mode) == "development"
}

func main() {
	e := echo.New()

	e.Static("/static", "static")

	rootPath, err := os.Getwd()
	if err != nil {
		panic(err)
	}

	templates := template.Must(template.New("").ParseGlob(filepath.Join(rootPath, "templates", "*.tmpl")))

	renderer := &TemplateRenderer{
		templates: templates,
	}
	e.Renderer = renderer

	e.GET("/", handlers.HomeHandler)
	e.GET("/transportation", handlers.TransportHandler)
	e.GET("/accommodation", handlers.AccommodationHandler)
	e.GET("/activity", handlers.ActivityHandler)
	e.GET("/faq", handlers.FAQHandler)
	e.GET("/booking", handlers.BookingHandler)

	e.Logger.Fatal(e.Start(":8080"))
}
