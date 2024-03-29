package driver

import (
	"fmt"
	"time"
)

func RegisterAPI() {
	time.Sleep(time.Second * 3)
	fmt.Println("API registered")
}
