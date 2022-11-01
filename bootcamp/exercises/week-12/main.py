from bird import *
from fish import *
from mammal import *
from food_manager import FoodManager

simba = Lion("simba")
nala = Lion("nala")
willy = Whale("willy")
akka = Goose("akka")
hedwig = Owl("hedwig")
nemo = ClownFish("nemo")
marlin = ClownFish("marlin")

animals =[]
animals.extend[simba,nala,willy,akka,hedwig,nemo,marlin]
food_manager = FoodManager()

for i in range(0,14):
    for animal in animals:
        food_manager.eat(animal)
