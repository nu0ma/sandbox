package main

import (
	"fmt"
	"time"
)

func main() {
	ch1 := make(chan int)

	// 5秒待ってからチャネルを閉じる
	go func() {
		fmt.Printf("go routine...\n")
		time.Sleep(5 * time.Second)
		close(ch1)
	}()

	counter := 0

LOOP:
	for {
		select {
		case <-ch1: // チャネルが閉じたらループから抜ける、その間に他のことができる
			break LOOP
		default:
		}

		counter++ // チャネルが閉じるまでここでcounter++で数値を増やす。並行に動作するGは5秒かかるので5秒分つまりcounterに5が入る。
		time.Sleep(1 * time.Second)  //
	}

	fmt.Printf("%v\n", counter)
}
