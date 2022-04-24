package main

import (
	"context"
	"fmt"
	"log"
	"time"
	"math/rand"
	"encoding/json"
	"net/http"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	
)

func random_ulke ()string{
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://eng:EyQiJ5QwyApBUjg3@mongodb:27017/"))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)

	database := client.Database("stajdb")
	mycol := database.Collection("ulkeler")

	var ulkeler bson.M
	min := 1
	max := 10

	rand.Seed(time.Now().UnixNano())
	randNum := rand.Intn(max-min)+min

	if err = mycol.FindOne(ctx, bson.M{"index": randNum }, options.FindOne().SetProjection(bson.M{"_id":0, "index":0})).Decode(&ulkeler); err != nil {
		log.Fatal(err)
	}

	jsonStr, err := json.Marshal(ulkeler)
    if err != nil {
        fmt.Printf("Error: %s", err.Error())
    }
	return string(jsonStr)
}

func main() { 
	
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello GO!" )
    })

    http.HandleFunc("/staj", func(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, random_ulke())
    })

    log.Fatal(http.ListenAndServe(":5555", nil))
}

