package main

// node type
type Node struct {
	key   int
	left  *Node
	right *Node
}

// constructre for the new node
func NewNode(key int) *Node {
	return &Node{key, nil, nil}
}

// type BST
type BST struct {
	root *Node
}

// constructer to the BST struct
func NewBST() *BST {
	return &BST{nil}
}

func (t *BST) Insert(key int) {
	if t.root == nil {
		// node := &Node{key: key}
		t.root = NewNode(key)
		return
	}

	curr := t.root

	for {
		if key < curr.key {
			if curr.left == nil {
				curr.left = NewNode(key)
				return
			}
			curr = curr.left
		} else {
			if curr.right == nil {
				curr.right = NewNode(key)
				return
			}
			curr = curr.right
		}
	}
}

// search for a key in the BST
// returns a node if found else returns nil
func (t *BST) Search(key int) *Node {
	curr := t.root

	for curr != nil {
		if key == curr.key {
			return curr
		} else if key < curr.key {
			curr = curr.left
		}else {
			curr = curr.right
		}
	}
	return nil
}




// deletes a key from the BST
func (t *BST) Delete(key int){
	
}

func (t *BST) InOrderTraversal(){

}




func main() {

}
