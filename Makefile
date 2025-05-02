.PHONY: dev build run clean

# Run with hot reload if "air" installed, else fallback to manual run.

dev:
	@if [ -x $$(command -v air) ]; then \
		echo "Starting with Air hot reload..."; \
		air; \
	else \
		echo "Air not found. Falling back to manual run..."; \
		go run ./cmd/web/main.go; \
	fi

# Build the app
build:
	go build -o ./tmp/main ./cmd/web/main.go

# Manually run without hot reload
run:
	go run ./cmd/web/main.go

# Clean binaries
clean:
	rm -f tmp/main