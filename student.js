function student(){
   let user= mark
   user=Number(mark)
    if(user>79){
        console.log("A");
    }else if(user>=60 && user<=79) {
        console.log("B")
    }else if(user>=50 && user<=59){
        console.log("C")
    }else if(user>=40 && user<=49){
        console.log("D")
    }else{
        console.log("E")
    }
}
console.log(student(80));
console.log(student(68))
