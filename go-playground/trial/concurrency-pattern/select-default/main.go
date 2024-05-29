package main

import (
	"fmt"
	"time"
)

func main() {

	ch := make(chan int)

	go func() {
		temp := <-ch
		fmt.Println(temp)
	}()

	time.Sleep(time.Second * 10)

	select {
	case ch <- 100:
		fmt.Println("sent")
	default:
		fmt.Println("no")
	}
}
