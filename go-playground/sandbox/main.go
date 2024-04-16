package main

import (
	"errors"
	"fmt"
)

type Config struct {
	Port int
}

type ConfigBuilder struct {
	port *int
}

func (b *ConfigBuilder) Port(port int) *ConfigBuilder {
	b.port = &port
	return b
}

func (b *ConfigBuilder) Build() (Config, error) {
	cfg := Config{}

	if b.port == nil {
		cfg.Port = 80
	} else if *b.port < 0 {
		return Config{}, errors.New("port should be positive")
	} else {
		cfg.Port = *b.port
	}
	return cfg, nil
}

func main() {
	builder1 := ConfigBuilder{}
	builder1.Port(9000)
	cfg, err := builder1.Build()
	if err != nil {
		panic(err)
	}
	fmt.Println(cfg.Port)

	builder2 := ConfigBuilder{}
	cfg2, err := builder2.Build()
	if err != nil {
		panic(err)
	}
	fmt.Println(cfg2.Port)
}
