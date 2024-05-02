package main

import "fmt"

func main() {
	s1 := make([]int, 1, 100000000)
	fmt.Println(len(s1))
	fmt.Println(cap(s1))

	s2 := make([]int, 5)
	copy(s2, s1)

	fmt.Println(len(s2))
	fmt.Println(cap(s2)) //5
}
