function nameGame(input) {
    let index = 0
    let comand = input[index]
    index++
    let title = ''
    let winer = 0
 
    while (comand !== 'Stop') {
        let sum = 0
        let i = 0
        let x = 0
        while (i < comand.length) {
            let compare = Number(input[index])
            index++                      
            i++
            let probEqual = 0
           
            while(x < i){
                probEqual += comand[x].charCodeAt()
                x++
            }
            if(probEqual === compare){
                sum += 10
            }else{
                sum += 2
            }
            
        }
                
         if(sum >= winer){
             title = comand
             winer = sum
         }        
 
        comand = input[index]
        index++
        
       
    }
 
    console.log(`The winner is ${title} with ${winer} points!`);
 
 
 
 
}