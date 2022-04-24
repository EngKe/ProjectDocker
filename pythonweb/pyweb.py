
from flask import Flask
import pymongo
import random

client = pymongo.MongoClient("mongodb://eng:EyQiJ5QwyApBUjg3@mongodb:27017/")
mydb   = client["stajdb"]
mycol  = mydb["iller"]

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello Python!"

@app.route("/staj")
def staj_request():
    rand_int = random.randint(1,10)
    city = mycol.find_one({"index":rand_int},{"_id": 0, "index": 0 })
    return city

if __name__ == '__main__':
    app.run(port=4444)
