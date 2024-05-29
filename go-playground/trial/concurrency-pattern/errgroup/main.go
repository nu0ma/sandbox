package main

import (
	"fmt"
	"log"
	"time"

	"golang.org/x/sync/errgroup"
)

// 並列に実行した中からエラーを受け取る
func main() {
	var eg errgroup.Group

	for i := 0; i < 10; i++ {
		n := i
		eg.Go(func() error {
			return do(n)
		})
	}

	if err := eg.Wait(); err != nil {
		fmt.Printf("Error at %d", err)
	}
}

func do(n int) error {
	if n%2 == 0 {
		return fmt.Errorf("%d error", n)
	}

	time.Sleep(1 * time.Second)
	log.Printf("%d called", n)
	return nil
}
