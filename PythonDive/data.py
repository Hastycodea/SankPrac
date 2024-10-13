# Primitive Data Structures
# It included Data types int, float, str, bool

y = 2
z = 2.5
c = "Data Structures"
x = True

print(type(y))
print(type(z))
print(type(c))
print(type(x))

# Dynammically Typed Language => 

# Non-Primitive Data Structures
# list, tuple, set dict

# List operations and indexing
# written as a list comma-separated elements enclosed within the square Brackets
# Mutable => Elements in the list 
# List consists of both Heterogenous and Homogeneous elements..

list1 = []
print(list1)

list1 = ["p", 'r' 'o', 'b', 'e']
print(len(list1))


print(list1[2])


name = "Mansa Musa"
l = list(name)
l2 = name.split(' ')
print(l)
print(l2)
print(type(l2))

l = [10, 20, [30, 40], 50]
print(l[2])
print(l[2][0])

# Slicing 
list1 = ["p", 'r', 'o', 'b', 'e']
list1[1:4:1] # slicing ==> start:stop:step
print("Printing Slicing")

print(list1)
print(list1[1:4:1])
print(list1[0:4])
print(list1[1:4:2])
