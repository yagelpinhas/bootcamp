from animal import Animal
class FoodManager:
    def __init__(self):         
        self.food_supply={}
        self.food_supply["meat"]=12*14
        self.food_supply["plankton"]=2000*14
        self.food_supply["seeds"]=14
        self.food_supply["worms"]=1400
        self.food_supply["algae"]=0.06*14
    def eat(self,animal):
        if self.food_supply[animal.get_food()]<animal.get_quantity():
            print("ran out of "+ animal.get_food()+ " now refilling.")
            self.food_supply[animal.get_food()]+=animal.get_quantity()
        else:
            self.food_supply[animal.get_food()]-=animal.get_quantity()
            print("The animal "+ animal.get_name()+" just ate "+animal.get_quantity()+" "+animal.get_food())