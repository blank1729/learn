package main

import "fmt"

// node type
type Node struct {
	value int
	next  *Node
}

type LinkedList struct {
	head *Node
}

func (l *LinkedList) PushFront(newData int) {
	node := &Node{value: newData}
	node.next = l.head
	l.head = node
}

func (l *LinkedList) PushBack(newData int) {
	node := &Node{value: newData}

	if l.head == nil {
		l.head = node
		return
	}

	last := l.head
	for last.next != nil {
		last = last.next
	}

	last.next = node
}

func (l *LinkedList) PrintList() {
	node := l.head

	for node != nil {
		fmt.Print(node.value, " ")
		node = node.next
	}
	fmt.Println("")
}

func main() {
	list := &LinkedList{}
	list.PushFront(19)
	list.PushFront(18)
	list.PushFront(16)
	list.PushFront(14)
	list.PushFront(12)
	list.PushBack(21)
	list.PushBack(23)
	list.PrintList()
}
