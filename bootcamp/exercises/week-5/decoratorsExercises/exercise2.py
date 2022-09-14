
from functools import wraps

def print_info(func):
  @wraps(func)
  def inner(*args, **kwargs):
    print(func.__name__) 
    print("kwargs: ")
    print(kwargs)
    print("args: ", end=" ")

    for x in args:
      print(x, end=" ")
    print()
    res = func(*args, **kwargs)
    print(res)
    print("return value is ")
    print(type(res))
    return res
  return inner 

@print_info
def add2(x, y):
  return x+y

add2(1,2)