const {writeFileSync} =  require("fs")
for(let i = 0; i < 10000; i++)
{
    writeFileSync("./content/big.txt", `hello Earth ${i} \n`, {flag: 'a'})
}

for(let i = 0; i < 1000000; i++)
{
    writeFileSync("./content/new_big.txt", `Hi welcome to universe ${i} \n`, {flag: 'a'})
}