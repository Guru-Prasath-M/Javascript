class parent{
    constructor(){
        console.log("Parent class Constructor")
    }
}
class child extends parent{
    constructor(){
        super()
        console.log("Child Class Constructor")
    }
}

new child()
