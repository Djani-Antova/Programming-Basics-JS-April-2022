function triangleArea (input) {
    let side = input[0];
    let height = input[1];

    let area = side * height / 2;
    
    area = area.toFixed(2);
    console.log(area);
}

triangleArea([15, 35]);