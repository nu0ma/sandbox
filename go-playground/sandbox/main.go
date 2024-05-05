package main

import "fmt"

type Customer struct {
	ID   int
	Name string
}

type Store struct {
	m map[int]*Customer
}

func (s *Store) storeCustomer(customers []Customer) {
	for _, customer := range customers {
		// fmt.Printf("%p\n", &customer)
		// s.m[customer.ID] = &customer
		c := customer
		s.m[customer.ID] = &c
	}
}

func main() {
	customers := []Customer{
		{ID: 1, Name: "John"},
		{ID: 2, Name: "Doe"},
		{ID: 3, Name: "Smith"},
	}

	store := Store{
		m: map[int]*Customer{},
	}

	store.storeCustomer(customers)

	for _, customer := range customers {
		fmt.Println(store.m[customer.ID])
	}

}
