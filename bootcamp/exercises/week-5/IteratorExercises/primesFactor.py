def get_prime_factors_generator(number):
  curr_number=number  
  
  while True:
    try:
        found=False
        for divisor in range(2,curr_number):
            if(curr_number%divisor == 0):
                found=True

                curr_number=int(curr_number/divisor)
                yield(divisor)
                break
               
        if(found == False):
            yield curr_number
            break
    except IndexError as e:
        break

for x in get_prime_factors_generator(100):
  print(x) 