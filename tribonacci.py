# import sys

# # n1 = int(sys.stdin.readline())
# # n2 = int(sys.stdin.readline())
# # n3 = int(sys.stdin.readline())
# # num = int(sys.stdin.readline())
# n1 = 1
# n2 = 1
# n3 = 1
# num = 4
# a = [n1, n2, n3]
# print(num)
# i = 0

# while (i < num)
#     a.append(a[i -1] + a[i-2] + a[i-3]
#     i+=1
# print(a[num])
import sys
numbers = [int(sys.stdin.readline()), int(sys.stdin.readline()), int(sys.stdin.readline())]

n = int(sys.stdin.readline())

for n in range (3, n):
    y = numbers[n - 1] + numbers[n - 2] + numbers[n - 3]
    numbers.append(y)

print (numbers.pop())