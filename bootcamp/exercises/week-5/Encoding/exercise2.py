def encode(s):
    res=""
    for i in range(0,len(s)):
        if(i==len(s)-1):
            res+=str(ord(s[i]))
        else:
            res+=str(ord(s[i]))+" "
    return res

def decode(s):
    arr=s.split(" ")
    res=""
    for i in range(0,len(arr)):
        num = int(arr[i])
        res+=chr(num)
    return res

encodedHello=encode("Hello")
decodedHello=decode(encodedHello)
print(decodedHello)
    