function housePainting (input) {
    let heightHouse = Number(input[0]);
    let lengthSideWall = Number(input[1]);
    let heightTriangleRoof = Number(input[2]);

    let greenPaintConsumption = 3.4;
    let redPaintConsumption = 4.3;

    let greenSquareArea = heightHouse * heightHouse;
    let squareArea = greenSquareArea * 2 - (1.2 * 2);
    let greenrectangArea = heightHouse * lengthSideWall;
    let rectangArea = 2 * greenrectangArea - 1.5 * 1.5 * 2;
    let rectRoof = (heightHouse * lengthSideWall) * 2;
    let triangRoof = 2 * (heightHouse * heightTriangleRoof / 2);
    
    let greenPaintArea = squareArea + rectangArea;
    let greenPaint = greenPaintArea / greenPaintConsumption;
    let redPaintArea = rectRoof + triangRoof;
    let redPaint = redPaintArea / redPaintConsumption;
    redPaint = redPaint.toFixed(2);
    greenPaint = greenPaint.toFixed(2)

    console.log(greenPaint);
    console.log(redPaint);
  
}
housePainting ([10.25,
    15.45,
    8.88]);
