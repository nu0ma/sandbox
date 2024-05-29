package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	doneCh := make(chan int)

	var wg sync.WaitGroup

	wg.Add(1)

	go func() {
		time.Sleep(3 * time.Second)
		doneCh <- 100
		wg.Done()
	}()

	for {
		select {
		case <-time.Tick(1 * time.Second):
			fmt.Println("waiting...")
		case <-doneCh:
			fmt.Println("done")
			return
		}
	}

}
