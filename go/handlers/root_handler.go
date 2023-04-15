package handlers

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

// Root data type that takes in an integer
type Root struct {
	Data int
}

// method on root handler
func (rt Root) ServeHTTP(rw http.ResponseWriter, r *http.Request) {

	if r.Method == http.MethodPost {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(rw, "Error reading request body", http.StatusInternalServerError)
			return
		}
		fmt.Fprintln(rw, "Yes that's right: ", string(body))
	} else {
		fmt.Fprintf(rw, "Hello world, This is <b>%d</b>", rt.Data)
		rw.Header().Add("Content-Type", "text/html")
		rw.WriteHeader(http.StatusAccepted)
	}
}
