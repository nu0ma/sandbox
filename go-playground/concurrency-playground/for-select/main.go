package main

import "fmt"

func main() {
	ch1 := make(chan int)

	go func() {
		ch1 <- 1
	}()

	for {
		select {
		case <-ch1:
			fmt.Println("hoge")
			return
		}
	}
}
