package main

import (
	"fmt"
	"time"
)

func doWork(done <-chan interface{}, strings <-chan string) <-chan interface{} {
	terminated := make(chan interface{})

	go func() {
		defer fmt.Println("doWork exited")
		defer close(terminated)
		for {
			select {
			case s := <-strings:
				fmt.Println("s:%s", s)
			case <-done:
				return
			}
		}
	}()
	return terminated
}

func main() {
	done := make(chan interface{})
	terminated := doWork(done, nil)

	go func() {
		time.Sleep(time.Second)
		close(done)
	}()

	<-terminated
}
