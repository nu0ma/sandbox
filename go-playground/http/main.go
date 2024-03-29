package main

import (
	"io"
	"log"
	"net/http"
)

func main() {
	h1 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "Hello from a Handle Func#1")
	}

	h2 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "Hello from a Handle Func#2")
	}

	http.HandleFunc("/", h1)
	http.HandleFunc("/endpoint", h2)

	log.Fatal(http.ListenAndServe(":8080", nil))

}
