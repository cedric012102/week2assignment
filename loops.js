let i = 0

while(i <= 100) {
    i += 2;
    console.log(i);
   }

   let a = 100

   while(a > 0) {
      a -= 3;
      console.log(a)
   }



for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Hello World") 
    } else if (i % 5 == 0) {
      console.log("World")  
    } else if (i % 3 == 0) {
        console.log("Hello")
    } else {
        console.log(i)
    }
}