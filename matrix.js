let test5 = [[1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]],

    test4 = [[1,2,3,4],
             [5,6,7,8],
             [9,10,11,12],
             [13,14,15,16]],

    test3 = [[1,2,3],
             [4,5,6],
             [7,8,9]],

    test2 = [[1,2],
             [3,4]]; 

function clockwiseSpiral(matrix){
  let result = [],
      matrixToString = [].concat(...matrix), // 1,2,3,4,5,6,7,8,9
      rang = parseInt(Math.pow(matrixToString.length,0.5))/2,
      i = 0;
  
  for(;i < rang; i++){
    result = result.concat(resultMatrix(matrix)); // result + matrix
    matrix = cutMatrix(matrix);
    /* пример работы cutMatrix
        1  2  3  4  5
        6  7  8  9 10      7  8  9
       11 12 13 14 15  => 12 13 14
       16 17 18 19 20     17 18 19
       21 22 23 24 25 
    */
    if([].concat(...matrix).length == 1) return result = result.concat(...matrix)
  }
  return result;
}
console.log(clockwiseSpiral(test5));

function resultMatrix(matrix){
  let matrixToString = [].concat(...matrix), // 1,2,3,4,5,6,7,8,9
      rang = Math.pow(matrixToString.length,0.5); // 3
      halfRang = parseInt(rang/2);
      //console.log(matrixToString.length)
      if(matrixToString.length == 1) return matrix[halfRang][halfRang];
      let x = 0,
      y = 0;

    let result = [];
    
    while(y < rang){
      result.push(matrix[x][y]);
      y++;      
    }

    y--;
    x++;

    while(x < rang){
      result.push(matrix[x][y]);
      x++;      
    }
    
    x--;
    y--;

    while(y >= 0){
      result.push(matrix[x][y]);
      y--;      
    }

    y++;
    x--;

    while(x > 0){
      result.push(matrix[x][y]);
      x--;      
    }

    return result;     
}

function cutMatrix(matrix){
    let matrixToString = [].concat(...matrix),
        rang = Math.pow(matrixToString.length,0.5),
        newRang = rang - 2, // rang for result
        result = new Array(newRang);
    
    for(let x = 0; x < newRang; x++)
      result[x] = new Array(newRang); // result[][]
    
    for(let i = 0; i < newRang; i++)
      for(let j = 0; j < newRang; j++)
        result[i][j] = matrix[i + 1][j + 1];
    
    //matrix[rang - 1].splice(0,rang + 1);
    //matrix[0].splice(0,rang + 1);
    return result;
}