import React, { useEffect, useState } from 'react'

const Square = ({piece, onClick, colIndex, rowIndex}) => {
  const [ bgColor, setBgColor ] = useState('#97badc');

  useEffect(()=>{
    if(rowIndex%2 == 0){
      if(colIndex%2 == 0){
        setBgColor('#42709e'); // dark color
      }else{
        setBgColor('#97badc'); //light color
      }
    }else{
      if(colIndex%2 !== 0){
        setBgColor('#42709e'); // dark color
      }else{
        setBgColor('#97badc'); // light color
      }
    }
    
  }, []);

  return (
    <div style={{backgroundColor: bgColor}}  className='square' onClick={onClick}>
      {piece && <span  className={`piece ${piece.color}`} >{piece.type}</span>}
    </div>
  )
}

export default Square;