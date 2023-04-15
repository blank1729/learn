package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// User struct
type User struct {
	Name     string
	Email    string
	Password string
}

// createUser function to create a new user
func createUser(name, email, password string) *User {
	return &User{
		Name:     name,
		Email:    email,
		Password: password,
	}
}

// userRegistrationHandler function to handle user registration
func userRegistrationHandler(w http.ResponseWriter, r *http.Request) {
	// Parse request body to get user data
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Create new user
	newUser := createUser(user.Name, user.Email, user.Password)

	// Save user to database or any other storage
	// ...

	// Return success response
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "User %s registered successfully!", newUser.Name)
}

// RegisterUser function to register user registration handler
func RegisterUser() {
	http.HandleFunc("/register", userRegistrationHandler)
}

// main function to start the server
func main() {
	RegisterUser()
	http.ListenAndServe(":8080", nil)
}
