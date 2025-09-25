alpha = "abcdefghijklmnopqrstuvwxyz"

import os

for x in range(26):
    os.makedirs(alpha[x], exist_ok=True)
    for y in range(26):
        os.makedirs(alpha[x]+"/"+alpha[y], exist_ok=True)
        for z in range(26):
            os.makedirs(alpha[x]+"/"+alpha[y]+"/"+alpha[z], exist_ok=True)
            with open(alpha[x]+"/"+alpha[y]+"/"+alpha[z]+"/hi.txt", "a") as f:
                f.write("hello")
            
