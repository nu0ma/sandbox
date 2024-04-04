package main

import (
	"fmt"
	"time"
)

func main() {
	ch1 := make(chan int)
	ch2 := make(chan int)

	go func() {
		time.Sleep(time.Millisecond)
		ch1 <- 1
	}()

	go func() {
		time.Sleep(time.Second * 2)
		ch2 <- 2
	}()

loop:
	for {
		select {
		case v := <-ch1:
			fmt.Printf("ch1:%v", v)
			break loop
		case v := <-ch2:
			fmt.Printf("ch2:%v", v)
			break loop
		default:
			fmt.Printf("progress....")
		}
	}

}
