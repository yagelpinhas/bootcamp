from animal import Animal
class Bird(Animal):
    def __init__(self, name,food,quantity,wing_span):
        super().__init__(name,food,quantity)
        self.wing_span=wing_span

    def get_wing_span(self):
        return self.wing_span

class Goose(Bird):
    def __init__(self,name):
        super().__init__(name,"seeds",1,10)

class Owl(Bird):
    def __init__(self,name):
        super().__init__(name,"worms",0.1,10)