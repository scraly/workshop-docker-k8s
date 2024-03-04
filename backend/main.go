package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		fmt.Fprintf(w, `
		
			##         .
			## ## ##        ==
		 ## ## ## ## ##    ===
		/"""""""""""""""""\___/ ===
		{                       /  ===-
		\______ O           __/
		 \    \         __/
		  \____\_______/
		

  		Hello from Docker!
  
  `)

	})

	log.Println("Listening on localhost:8080")

	log.Fatal(http.ListenAndServe(":8080", nil))
}
