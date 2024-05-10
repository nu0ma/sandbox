package main

import "fmt"

func main() {
	s := "hållo"
	fmt.Println(len(s)) // 6

	runes := []rune(s)
	for i, r := range runes {
		fmt.Printf("%d,%c\n", i, r)
	}
}
