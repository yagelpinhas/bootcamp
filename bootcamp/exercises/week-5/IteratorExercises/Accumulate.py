def my_accumulate(elements):
  sum=0
  index=0  
  while True:
    try:
        sum+=elements[index]
        index+=1
        yield sum
        
    except IndexError as e:
        break


for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 