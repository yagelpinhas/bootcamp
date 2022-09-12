import math
"""
try:
    dividend = float(input("Enter the dividend: "))
    divisor = float(input("Enter the divisor: "))
    quotient = dividend/divisor
    print(math.floor(quotient)) 
except ValueError:
  print("You should insert a number!") 
except ZeroDivisionError:
    print("You shouldn't divide by zero !")


"""


def get_list_element(my_list, index):
  print(my_list[index]) 

l=[0,1]
try:
    get_list_element(l,3)
except:
    print("the index is invalid!")