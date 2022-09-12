my_tuple=(1,2,"hello",[3],4,5,"yes",10)
print(my_tuple[-4:])

days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
fixed_days=([x for x in days if x!="Tuesday"])
print(fixed_days)

numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(numbers[::-1])


#reversed minus the first element
print(numbers[1:][::-1])

#reversed minus the last element
print(numbers[:-1][::-1])

