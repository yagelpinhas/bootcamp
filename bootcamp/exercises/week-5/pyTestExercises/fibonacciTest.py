import pytest
 
def funcFibonacci(n):
    if n<= 0:
        print("Incorrect input")
    # First Fibonacci number is 0
    elif n == 1:
        return 0
    # Second Fibonacci number is 1
    elif n == 2:
        return 1
    else:
        return funcFibonacci(n-1)+funcFibonacci(n-2)
    
@pytest.mark.parametrize("num, index", [(34,10), (1,2)])
def test_fibonacci(num,index):
    assert funcFibonacci(index)==num


 
