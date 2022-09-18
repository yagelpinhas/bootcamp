from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn
import requests
from fastapi.responses import FileResponse

money =1000
app = FastAPI()
@app.get("/furniture/{name}")
async def get_furniture_price(name):
    res = requests.get('http://localhost:8000/price/{}'.format(name))
    return res.json()["price"]

@app.get('/')
def root():
    return "Client runs"

@app.get('/buy')
async def buy_item():
    name = input('What do you want to buy?\n')
    res = requests.get('http://localhost:8000/price/{}'.format(name))
    price_of_item = int(res.json()["price"])
    if(money>=price_of_item):
        res = requests.get('http://localhost:8000/buy/{}'.format(name))
        inventory = res.json()[name]
        money-=price_of_item
        return f"Congraulations. You have just bought {name} for {price_of_item}. There are {inventory} left."
        #return res.json()
    else:
        return "You don't have enough money. Get a job."
    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7000)