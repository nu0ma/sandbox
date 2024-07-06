package main

import (
	"context"
	"log"

	"google.golang.org/grpc"
)

func myUnaryServerInterceptor1(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp any, err error) {
	log.Println("[pre] my unary server interceptor 1: ", info.FullMethod)
	res, err := handler(ctx, req)
	log.Println("[post] my unary server interceptor 1 :", res)
	return res, err

}
