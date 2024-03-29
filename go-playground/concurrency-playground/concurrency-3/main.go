package main

import (
	"fmt"
)

func main() {
	tasks := []int{
		1, 2, 3, 4, 5,
	}

	// var wg sync.WaitGroup
	// wg.Add(5)

	for _, tasks := range tasks {
		go func() {
			fmt.Println(tasks)
			// wg.Done()
		}()
	}

	// wg.Wait()
}
