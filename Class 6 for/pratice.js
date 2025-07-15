//While Loop
i=1;
while (i<=10) {
    console.log(i)
    i++;
}

//Do-while loop
i=10
do{
    console.log(i)
    i--
}while(i>=1)


//for-of
let arr = ["apple","orange","mango","grapes"]
for(let fruit of arr){
    console.log(fruit)
}


// for-in using object
item={
    Name : "Dinesh",
    Age : 21,
    Price : 100
}
for(let key in item){
    console.log(item[key])
}
