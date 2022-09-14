from operator import itruediv


def reduce(function,iterable,initial = -1):
    accumulator=1
    for i in range(0,len(iterable)):
        if i==0 and initial != -1:
            accumulator = function(initial,iterable[0])
        else:
            accumulator = function(accumulator,iterable[i])
    return accumulator

def multiply(accumulator,currValue):
    return accumulator*currValue   

print(reduce(multiply,[1,2,3,4,5]))
