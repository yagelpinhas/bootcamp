from animal import Animal
class Mammal(Animal):
    def __init__(self,name,food,quantity,pregnancy_duration):
        super().__init__(name,food,quantity)
        self.pregnancy_duration=pregnancy_duration
    def get_pregnancy_duration(self):
        return self.pregnancy_duration

class Lion(Mammal):
    def __init__(self,name):
        super().__init__(name,"meat",6,10)

class Whale(Mammal):
    def __init__(self,name):
        super().__init__(name,"plankton",2000,10)