lambda s:" ".join(list(map(lambda word: word[::-1],s.split(" "))))

def func(s):
    return " ".join(list(map(lambda word: word[::-1],s.split(" "))))

print(func("hello world" ))