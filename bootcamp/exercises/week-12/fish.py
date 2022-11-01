from animal import Animal

class Fish(Animal):
    def __init__(self, name,food,quantity,lowest_depth):
        super().__init__(name,food,quantity)
        self.lowest_depth=lowest_depth

    def get_lowest_depth(self):
        return self.lowest_depth

class ClownFish(Fish):
    def __init__(self,name):
        super().__init__(name,"algae",0.03,10)
