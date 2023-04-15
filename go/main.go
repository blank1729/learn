package main

import (
	"mooca/handlers"
	"net/http"
)

func main() {
	mux := http.DefaultServeMux

	r := handlers.Root{Data: 42}

	mux.Handle("/api", r)
	mux.HandleFunc("/html", handlers.HtmlHandler)

	http.ListenAndServe(":8080", nil)
}
