package main

import (
	"context"
	"fmt"
	"os/signal"
	"syscall"
)

func main() {
	ctx := context.Background()
	sigctx, cancel := signal.NotifyContext(ctx, syscall.SIGINT, syscall.SIGTERM)
	defer cancel()

	go func() {
		fmt.Println("start server")
	}()

	<-sigctx.Done()

	fmt.Println("one more")
	sigctx2, cancel2 := signal.NotifyContext(ctx, syscall.SIGINT, syscall.SIGTERM)

	<-sigctx2.Done()

	defer cancel2()
	fmt.Println("signal accepted")

}
