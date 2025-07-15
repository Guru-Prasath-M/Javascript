let arr = [1,2,3,4,5,6,1,3,4,7,8];
for(let i=0 ; i< arr.length;i++){
    if(arr.indexOf(arr[i]) !==i)
        console.log(arr[i])
}