def setCounter(step):
  counter = 0
  def count():
    nonlocal counter
    counter += step
    print(counter)
  return count

increment = setCounter(2)
increment() 
increment()