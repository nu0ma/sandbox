package main

import (
	"fmt"
	"net/http"
)

func main() {
	server := http.Server{
		Addr: ":1323",
	}

	http.HandleFunc("/register", func(w http.ResponseWriter, r *http.Request) {
		body := make([]byte, r.ContentLength)

		r.Body.Read(body)
		fmt.Fprintln(w, string(body))
		fmt.Println("registered")
	})

	server.ListenAndServe()

}
