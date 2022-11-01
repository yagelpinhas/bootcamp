class Animal:
    def __init__(self,name,food,quantity):
        self.name=name
        self.food=food
        self.quantity=quantity
    def eat(self):
        print(self.name+"is eating "+self.quantity+"kilograms of "+self.food)
    def get_food(self):
        return self.food
    def get_quantity(self):
        return self.quantity
    def get_name(self):
        return self.name



