def my_enumerate(elements,x=0):
  n=x

  while True:
    try:
        yield n,elements[n-x]
        n+=1
    except IndexError as e:
        break

"""""
for index, elem in my_enumerate([10, 20, 30, 40],0):
  print(index, elem)

"""

for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  
