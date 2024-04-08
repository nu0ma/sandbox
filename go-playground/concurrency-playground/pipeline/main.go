package main

import "fmt"

func generator(done <-chan interface{}, numbers ...int) <-chan int {
	ch := make(chan int, len(numbers))
	go func() {
		defer close(ch)
		for _, i := range numbers {
			select {
			case <-done:
				return
			case ch <- i:
			}
		}
	}()
	return ch
}

func multiply(done <-chan interface{}, nch <-chan int, multiplier int) <-chan int {
	mch := make(chan int)
	go func() {
		defer close(mch)
		for i := range nch {
			select {
			case <-done:
				return
			case mch <- i * multiplier:
			}
		}
	}()
	return mch
}

func add(done <-chan interface{}, nch <-chan int, additive int) <-chan int {
	ich := make(chan int)
	go func() {
		defer close(ich)
		for i := range nch {
			select {
			case <-done:
				return
			case ich <- i + additive:
			}
		}
	}()
	return ich
}

func main() {
	done := make(chan interface{})
	defer close(done)

	ch := generator(done, 1, 2, 3, 4)
	pipeline := multiply(done, add(done, multiply(done, ch, 2), 1), 2)
	for v := range pipeline {
		fmt.Println(v)
	}
}
