package main

import "fmt"

func f(s []int) {
	_ = append(s, 10)
}

func main() {
	s := []int{1, 2, 3}
	f(s[:2])
	fmt.Println(s)  // {1,2,10}になる。意図したいのは{1,2,3,10}だったのに
}
