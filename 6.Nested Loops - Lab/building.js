function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor >= 1; floor--) {
        let buff = "";
        for (let room = 0; room < y; room++) {
            if (floor === x) {
                buff+=`L${floor}${room} `
            } else if (floor % 2 === 0) {
                buff+=`O${floor}${room} `
            } else {
                buff+=`A${floor}${room} `
            }
           
           
        }
        console.log(buff);
    }

    
    }


building (["4", "4"])