import "./App.css";
import React, { useState } from "react";
import Canva from "./Canva";
import Form from "./Form";

function App() {
  const multMatrix = (matrix1, matrix2) => {
    let aux = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          for (var l = 0; l < 3; l++) {
            if (j === k) {
              aux[j][i] = aux[j][i] + (matrix1[k][l] * matrix2[l][i]);
            }
          }
        }
      }
    }
    return aux;
  };
  let [points, setPoints] = useState({
    A: { x: 250, y: 250 },
    B: { x: 350, y: 150 },
    C: { x: 350, y: 250 },
  });

  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [sx, setSx] = useState(0);
  const [sy, setSy] = useState(0);
  const [angule, setAngule] = useState(0);

  const handleUpdateFromDad = (field, value) => {
    if (field === "tx") setTx(parseInt(value));
    if (field === "ty") setTy(parseInt(value));
    if (field === "sx") setSx(parseInt(value));
    if (field === "sy") setSy(parseInt(value));
    if (field === "angule") setAngule(parseInt(value));
  };

  const calculateTransformation = () => {
    let rotacion = [
      [Math.cos(((-angule)*Math.PI)/180), -Math.sin(((-angule)*Math.PI)/180), 0],
      [Math.sin(((-angule)*Math.PI)/180), Math.cos(((-angule)*Math.PI)/180), 0],
      [0, 0, 1],
    ];
    let traslacion = [
      [1, 0, tx],
      [0, 1, ty],
      [0, 0, 1],
    ];
    let escala = [
      [sx, 0, 0],
      [0, sy, 0],
      [0, 0, 1],
    ];
    let resultadoA = [
      [points.A.x, 0, 0],
      [points.A.y, 0, 0],
      [1, 0, 0],
    ];
    let resultadoB = [
      [points.B.x, 0, 0],
      [points.B.y, 0, 0],
      [1, 0, 0],
    ];
    let resultadoC = [
      [points.C.x, 0, 0],
      [points.C.y, 0, 0],
      [1, 0, 0],
    ];

    // Rotación
    if(angule!==0){
      resultadoA[0][0] = resultadoA[0][0] - 250;
      resultadoA[1][0] = resultadoA[1][0] - 250;
      resultadoB[0][0] = resultadoB[0][0] - 250;
      resultadoB[1][0] = resultadoB[1][0] - 250;
      resultadoC[0][0] = resultadoC[0][0] - 250;
      resultadoC[1][0] = resultadoC[1][0] - 250;
      
      resultadoA = multMatrix(rotacion,resultadoA);
      console.log(resultadoA[0][0]," - ",resultadoA[1][0]);
      resultadoB = multMatrix(rotacion,resultadoB);
      console.log(resultadoB[0][0]," - ",resultadoB[1][0]);
      resultadoC = multMatrix(rotacion,resultadoC);
      console.log(resultadoC[0][0]," - ",resultadoC[1][0]);
      resultadoA[0][0] = resultadoA[0][0] + 250;
      resultadoA[1][0] = resultadoA[1][0] + 250;
      resultadoB[0][0] = resultadoB[0][0] + 250;
      resultadoB[1][0] = resultadoB[1][0] + 250;
      resultadoC[0][0] = resultadoC[0][0] + 250;
      resultadoC[1][0] = resultadoC[1][0] + 250;
      setPoints({
        A: { x: resultadoA[0][0], y: resultadoA[1][0] },
        B: { x: resultadoB[0][0], y: resultadoB[1][0] },
        C: { x: resultadoC[0][0], y: resultadoC[1][0] },
      });
    }   

    // Traslacion
    resultadoA = multMatrix(traslacion,resultadoA);
    console.log(resultadoA[0][0]," - ",resultadoA[1][0]);
    resultadoB = multMatrix(traslacion,resultadoB);
    console.log(resultadoB[0][0]," - ",resultadoB[1][0]);
    resultadoC = multMatrix(traslacion,resultadoC);
    console.log(resultadoC[0][0]," - ",resultadoC[1][0]);
    setPoints({ 
      A: { x: resultadoA[0][0], y: resultadoA[1][0] },
      B: { x: resultadoB[0][0], y: resultadoB[1][0] },
      C: { x: resultadoC[0][0], y: resultadoC[1][0] },
    });

    // Escalado
    if((sx!==0)&&(sy!==0)){
      resultadoA[0][0] = resultadoA[0][0] - 250;
      resultadoA[1][0] = resultadoA[1][0] - 250;
      resultadoB[0][0] = resultadoB[0][0] - 250;
      resultadoB[1][0] = resultadoB[1][0] - 250;
      resultadoC[0][0] = resultadoC[0][0] - 250;
      resultadoC[1][0] = resultadoC[1][0] - 250;

      resultadoA = multMatrix(escala,resultadoA);
      console.log(resultadoA[0][0]," - ",resultadoA[1][0]);
      resultadoB = multMatrix(escala,resultadoB);
      console.log(resultadoB[0][0]," - ",resultadoB[1][0]);
      resultadoC = multMatrix(escala,resultadoC);
      console.log(resultadoC[0][0]," - ",resultadoC[1][0]);

      resultadoA[0][0] = resultadoA[0][0] + 250;
      resultadoA[1][0] = resultadoA[1][0] + 250;
      resultadoB[0][0] = resultadoB[0][0] + 250;
      resultadoB[1][0] = resultadoB[1][0] + 250;
      resultadoC[0][0] = resultadoC[0][0] + 250;
      resultadoC[1][0] = resultadoC[1][0] + 250;
      setPoints({
        A: { x: resultadoA[0][0], y: resultadoA[1][0] },
        B: { x: resultadoB[0][0], y: resultadoB[1][0] },
        C: { x: resultadoC[0][0], y: resultadoC[1][0] },
      });
    }    
    console.log("Points: ", points);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Transformaciones bidimensionales</h1>
        <Form
          tx={tx}
          ty={ty}
          sx={sx}
          sy={sy}
          angule={angule}
          handleUpdateFromDad={handleUpdateFromDad}
          calculateTransformation={calculateTransformation}
        />
        <br></br>
        <Canva points={points} />
      </div>
    </>
  );
}

export default App;
