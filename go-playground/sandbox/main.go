package main

import (
	"context"
	"fmt"
	"time"
)

func longProcess(ctx context.Context) {
	fmt.Println("Started...")
	time.Sleep(time.Second * 2)

	select {
	case <-ctx.Done():
		fmt.Println("Cancel at longProcess")
	default:
		fmt.Println("Done at longProcess")
	}
}

func main() {
	done := make(chan any)
	timeout := time.Second * 1
	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()

	go func() {
		longProcess(ctx)
		done <- true
	}()

	select {
	case <-done:
		fmt.Println("Completed!")
	case <-ctx.Done():
		fmt.Println("Cancel", ctx.Err().Error())
	}

}
