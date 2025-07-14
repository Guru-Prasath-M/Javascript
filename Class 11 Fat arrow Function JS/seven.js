//While using fat arrow function it will not OVERWRITE but in normal function it will be OVERWRITE

var wish = ()=>{
    console.log("GM")
}
wish()

var wish = ()=>{
    console.log("GN")
}
wish()