package main

import (
	"math/rand"
	"time"
)

func createRand()  {
	rand.Intn(5000000000)
}

func main() {
	done := make(chan interface{})
	defer close(done)

	start := time.Now()

	randCh := toInt(done,)
}