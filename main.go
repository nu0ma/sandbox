package main

import (
	"go-mock-test/config"
	"go-mock-test/server"
)

func main() {
	config.InitDB()
	server.Run()
}
