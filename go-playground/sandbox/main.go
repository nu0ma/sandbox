package main

import "sandbox/server"

func main() {
	s1 := server.New("localhost", 8080)
	s2 := server.New("localhost", 90, server.WithTimeout(80))
}
