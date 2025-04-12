package main


import (
	"fmt"
)

func hello() bool {
	fmt.Println("Hello, world!")
	
	return true
}

type ExampleStruct struct {
	Value int
}

func (e *ExampleStruct) GetValue() int {
	return e.Value
}

func main() {
	example := ExampleStruct{
		Value: 42,
	}
	
	fmt.Printf("Value: %d\n", example.GetValue())
} 