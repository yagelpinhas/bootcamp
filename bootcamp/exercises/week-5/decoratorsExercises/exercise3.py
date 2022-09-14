import time
def wait_time(func):
  def inner(*args, **kwargs):
    time.sleep(1)
    res = func(*args, **kwargs)
    return res
  return inner 

@wait_time
def add2(x, y):
    res=0
    for i in range(0,1000000):
        res=res+i
    return x+y

print(add2(1,2))