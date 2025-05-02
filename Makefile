.PHONY: dev build run clean

# Run with hot reload if "air" installed, else fallback to manual run.

dev:
	@if [ -x $$(command -v air) ]; then \
		echo "Starting with Air hot reload..."; \
		air; \
	else \
		echo "Air not found. Falling back to manual run..."; \
		go run ./cmd/web; \
	fi

# Build the app
build:
	go build -o taniti-island ./cmd/web

# Manually run without hot reload
run:
	go run ./cmd/web

# Clean binaries
clean:
	rm -f taniti-island