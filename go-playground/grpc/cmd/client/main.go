package main

import (
	"bufio"
	"context"
	"fmt"
	"log"
	hellopb "mygrpc/pkg/grpc"
	"os"

	_ "google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

var (
	scanner *bufio.Scanner
	client  hellopb.GreetingServiceClient
)

func main() {
	fmt.Printf("start gRPC client.")

	scanner = bufio.NewScanner(os.Stdin)

	address := "localhost:8080"
	conn, err := grpc.Dial(
		address,
		grpc.WithChainUnaryInterceptor(myUnaryClientInterceptor1,
			myUnaryClientInterceptor2),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithBlock(),
	)

	if err != nil {
		log.Fatal("connection failed")
		return
	}

	defer conn.Close()

	client = hellopb.NewGreetingServiceClient(conn)
	Hello()

	// for {
	// 	fmt.Println("1: send Request")
	// 	fmt.Println("2:exit")
	// 	fmt.Println("please enter >")

	// 	scanner.Scan()
	// 	in := scanner.Text()

	// 	switch in {
	// 	case "1":
	// 		Hello()
	// 	case "2":
	// 		fmt.Println("bye.")
	// 		goto M
	// 	}
	// }

	// M:
}

func Hello() {
	fmt.Println("Please enter your name")
	scanner.Scan()
	name := scanner.Text()

	req := &hellopb.HelloRequest{
		Name: name,
	}

	ctx := context.Background()
	md := metadata.New(map[string]string{"type": "unary", "from": "client"})
	ctx = metadata.NewOutgoingContext(ctx, md)

	res, err := client.Hello(ctx, req)
	if err != nil {
		fmt.Println(err)
		if stat, ok := status.FromError(err); ok {
			fmt.Printf("code:%s\n", stat.Code())
			fmt.Printf("message: %s\n", stat.Message())
			fmt.Printf("details:%s\n", stat.Details())
		}
	} else {
		fmt.Println(res.GetMessage())
	}
}
