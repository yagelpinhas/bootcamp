class Primes:
    def __init__(self):
        pass
    def is_prime(self,number):
        if(number == 0 or number == 1):
            return False
        divisors = [x for x in range(2,number) if number % x == 0]
        return len(divisors)==0
    def are_prime_numbers(self,*args):
        primes = [x for x in args if self.is_prime(x)]
        return len(primes)==len(args)

