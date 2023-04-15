package main

import "fmt"

type Stack struct {
	data []int
}

func (s *Stack) Push(value int) {
	s.data = append(s.data, value)
}

func (s *Stack) Pop() int {
	// checking if the Stack is empyt
	if s.IsEmpty() {
		return 0
	}
	top := s.data[len(s.data)-1]

	s.data = s.data[:len(s.data)-1]

	return top
}

func (s *Stack) IsEmpty() bool {
	if len(s.data) == 0 {
		return true
	}
	return false
}

func (s *Stack) Peek() int {
	if s.IsEmpty() {
		return 0
	}

	return s.data[len(s.data)-1]
}

func main() {
	s := &Stack{}
	s.Push(1)
	s.Push(2)
	s.Push(3)
	fmt.Println("Top: ", s.Peek())
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
}
