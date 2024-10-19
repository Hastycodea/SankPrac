from functools import reduce


def main(x, y, z = 20):
    p = x + y + z
    return p
# x = int(input('enter a number: '))
# y = int(input('enter a number: '))
# z = int(input('enter a number: '))

# print(main(x, y))

li = [3, 4, 5, 6, 4]
final_list = list(map(lambda x: (x*2), li))
print(final_list)

sum = reduce((lambda x, y: x+y), li)
print(sum)