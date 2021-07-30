console.log("hello World")
//Exercise 1
/*
for(let i = 0; i < 100; i++){
    if(i % 2 === 0){
        continue;
    }else{
        console.log(i)
    }
}*/
//Exercise 2 
for(let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log("FIIZBUZZ")
        }else if(i % 3 === 0){
            console.log('FIZZ')
        }else if(i % 5 === 0){
            console.log('BUZZ')
        }else{
            console.log(i)
        }
    }
