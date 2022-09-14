times = 0 
def count_time(func):
  def inner(*args, **kwargs):
    global times
    times+=1
    res = func(*args, **kwargs)
    print(times)
    return res
  return inner 

@count_time
def add2(x, y):
    res=0
    for i in range(0,1000000):
        res=res+i
    return x+y

add2(1,2)
add2(1,2)
add2(1,2)