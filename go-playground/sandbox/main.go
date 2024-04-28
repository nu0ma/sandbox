package main

import "fmt"

func check(id string) []int {
	result := make([]int, 0)
	if id == "" {
		return nil
	}
	return result
}

func main() {
	id := ""

	r := check(id)

	if len(r) != 0 {
		fmt.Println("r is not nil")
		return
	}

	fmt.Println("r is  nil")

}
