import time

def print_time(func):
  def inner(*args, **kwargs):
    dtbefore = time.time()
    res = func(*args, **kwargs)
    dtafter = time.time()
    difference = (dtafter-dtbefore)*1000
    print(difference)
    return res
  return inner 

@print_time
def add2(x, y):
    res=0
    for i in range(0,1000000):
        res=res+i
    return x+y

add2(1,2)