class CircleIter:
  def __init__(self, elements,size):
    self.max = size
    self.elements = elements

  def __iter__(self):
    self.currIterations = 0
    self.currIndex=-1
    return self
    
  def __next__(self):
    if self.currIterations >= self.max or len(self.elements) ==0 :
      raise StopIteration
    else:
        self.currIndex= (self.currIndex +1 ) % len(self.elements)
        self.currIterations +=1
        return self.elements[self.currIndex]


for x in CircleIter([1,2,3],4):
  print("\n")
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
