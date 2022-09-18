from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn
import requests
from fastapi.responses import FileResponse
from static import store
app = FastAPI()


app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/sale/")
async def query_params(admin):
    if(admin == "true"):
        stores_data=store.stores
        for obj in stores_data:
            if obj["inventory"]>10:
                obj["price"]=obj["price"]*0.5
    return stores_data

@app.get("/sanity")
def get_sanity():
    return "Server is up and running smoothly"


@app.get("/price/{name}")
async def get_price(name):
    stores_data=store.stores
    for obj in stores_data:
        if obj["name"]==name:
            return {"price": obj["price"]}
    return {"price":"None"}

@app.get("/buy/{name}")
async def buy_item(name):
    stores_data=store.stores
    for obj in stores_data:
        if obj["name"]==name:
            obj["inventory"]=obj["inventory"]-1
            return {name : obj["inventory"]}
   

@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()

@app.get('/')
def root():
    return "Hey"


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"

@app.get("/landing/{username}")
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message":"Hi there {}".format(name)}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)