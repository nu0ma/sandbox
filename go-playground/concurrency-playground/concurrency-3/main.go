package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup

	tasks := []string{
		"hoge1",
		"hoge2",
		"hoge3",
	}

	wg.Add(len(tasks))

	for _, task := range tasks {
		go func(task string) {
			fmt.Println(task)
			wg.Done()
		}(task)
	}

	wg.Wait()
}
