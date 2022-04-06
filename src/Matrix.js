import React from 'react'

const Matrix = () => {
    
    let matrix1 = [
        [1,0,2],
        [0,1,2],
        [0,0,1]
    ];
    let matrix2 = [
        [250,0,0],
        [250,0,0],
        [1,0,0]
    ]; 
    const multMatrix = () => {
        let matrix3 = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]; 
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    for (var l = 0; l < 3; l++) {
                        if (j === k) {
                            matrix3[j][i] = matrix3[j][i] + (matrix1[k][l] * matrix2[l][i]);
                        }
                    }
                }
            }
        }
        console.table(matrix3);
        console.log(matrix3[0][0]," - ", matrix3[1][0]);   
    }
     

  return (
    <>
        <div>{multMatrix()}</div>
    </>
  )
}

export default Matrix