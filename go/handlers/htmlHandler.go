package handlers

import (
	"fmt"
	"net/http"
)

func HtmlHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprintln(w, "<main><h1>You are shit</h1></main>")
}
