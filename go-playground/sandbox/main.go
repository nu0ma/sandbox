package main

import "fmt"

func main() {

	i := 0
	ch := make(chan any, 1) // バッファがあると受信完了を待たない（1回分はすでにあるので）

	go func() {
		i = 1
		<-ch
	}()

	ch <- 1
	fmt.Println(i)
}
