
def func_wrap():
  max = 0
  def func(*args):
    nonlocal max
    counter =len(args)
    if(counter>max ):
        max = counter
    return max
  return func


func = func_wrap()
print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 