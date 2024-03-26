package driver

import (
	"fmt"
	"time"
)

func RegisterDB() {
	time.Sleep(time.Second * 5)
	fmt.Println("DB registered")
}
