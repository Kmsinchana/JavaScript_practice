//for loop
for (let index = 0; index < 10; index++) {
    console.log(index)  
}
//while loop

let index=0;
while(index<10){
    console.log(index++)  
}

//do while loop

let i=20
do{
console.log(i--)
}while(i>0)

//break and continue
//break
for (let index = 0; index < 10; index++) {
   if(index == 3){
    break;           //the code will stop when this condition is met now it is 3
   }
   console.log(index)
    
}

//continue

for (let index = 0; index < 10; index++) {
   if(index == 3){
    continue;       //the code which is below the continue will not get execute when the condition is satisfied(like only for three).
   }
   console.log(index)
    
}