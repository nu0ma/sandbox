package main

import (
	"fmt"
	"sync"
)

func main() {
	i := 0

	mutex := sync.Mutex{}

	go func() {
		mutex.Lock()
		i++
		mutex.Unlock()
	}()

	go func() {
		mutex.Lock()
		i++
		mutex.Unlock()
	}()

	mutex.Lock()

	fmt.Println(i)
	mutex.Unlock()

}
