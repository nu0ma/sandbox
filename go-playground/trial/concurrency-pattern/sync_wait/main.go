package main

import (
	"fmt"
	"sync"
	"time"
)

func do(n int) {
	time.Sleep(time.Second * 1)
	fmt.Printf("%d called\n", n)
}

// 全てのゴルーチンを待つ
func main() {
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(n int) {
			defer wg.Done()
			do(n)
		}(i)
	}

	wg.Wait()
}
