package main

import "fmt"

type Graph struct {
	Vertices int
	Edges    map[int][]int
}

func NewGraph(vertices int) *Graph {
	return &Graph{Vertices: vertices, Edges: make(map[int][]int)}
}

func (g *Graph) AddEdge(u, v int) {
	g.Edges[u] = append(g.Edges[u], v)
	g.Edges[v] = append(g.Edges[v], u)
}

func DFS(g *Graph, start int, visited map[int]bool) {
	visited[start] = true
	fmt.Println(start)

	for _, v := range g.Edges[start] {
		if !visited[v] {
			DFS(g, v, visited)
		}
	}
}

func DfsIterative() {

}

func main() {
	g := NewGraph(5)
	g.AddEdge(0, 1)
	g.AddEdge(0, 4)
	g.AddEdge(1, 2)
	g.AddEdge(1, 3)
	g.AddEdge(1, 4)
	g.AddEdge(2, 3)
	g.AddEdge(3, 4)

	fmt.Println("Vertices:", g.Vertices)
	fmt.Println("Edges:", g.Edges)
	DFS(g, 0, make(map[int]bool))
}
