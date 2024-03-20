package main

import (
	"fmt"
	"time"
)

func downloadJSON(u string) {
	println(u)
	time.Sleep(time.Second * 2)
}

func main() {
	before := time.Now()

	for i := 0; i < 100; i++ {
		url := fmt.Sprintf("example.com/download?id=%d", i)
		downloadJSON(url)
	}

	fmt.Printf("%v\n", time.Since(before))
}
