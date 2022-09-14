dictionary={}

def cache(func):
  def inner(*args, **kwargs):
    global dictionary
    if args[0] in dictionary.keys():
        return dictionary[args[0]]
    else:
        res = func(args[0])
        dictionary[args[0]]=res
        return res
  return inner 

@cache
def fibonacci(n):
   print("calculating: ", n)  
   if n <= 1:
       return n
   else:
       return(fibonacci(n-1) + fibonacci(n-2))




print(fibonacci(2))
print(fibonacci(4)) 