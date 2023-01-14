FROM golang:1.19.5-buster AS build

WORKDIR /build


COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY ./ .

ARG CGO_ENABLED=0
ARG GOOS=linux
ARG GOARCH=amd64

# RUN go test ./...

RUN go build -o target/api

FROM debian:buster-slim

WORKDIR /

COPY --from=build /build/target/api .

ENTRYPOINT ["./api"]