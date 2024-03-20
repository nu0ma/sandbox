package main

import (
	"fmt"
	"sync"
	"time"
)

func downloadJSON(u string) {
	println(u)
	time.Sleep(time.Second * 2)
}

func main() {
	before := time.Now()
	limit := make(chan struct{}, 20)

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)

		i := i
		go func() {
			limit <- struct{}{}
			defer wg.Done()
			url := fmt.Sprintf("example.com/download?id=%d", i)
			downloadJSON(url)
			<-limit
		}()
	}

	wg.Wait()

	fmt.Printf("%v\n", time.Since(before))
}
