function whileAndIfDemo() {

    // for (let i=1; 1 < 50; i++) {

    //      if(i === 20) {  --spira izpalnenieto predi 20, nishto ne se slaga sled break
    //         break;   
    // }
    //      console.log(i);
    //  }
    let num = 1;
    while (num <= 20) {
        if (num === 15) {
            break;
        }
        console.log(num);
        num++;
    }
    console.log(num);
    console.log(`NUM VALUE : ${num}`); // stoynostta koqto izliza after the loop
    
}
whileAndIfDemo ();
