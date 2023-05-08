import React from 'react'
import arrowLeft from "../icons/arrowLeft.svg";
import arrowRight from "../icons/arrowRight.svg";
import "../index.css"

function Page({pageNumber, passChangePage, passSetChangePage}) {

    function turnRight(){
        passSetChangePage(passChangePage + 1);

        console.log(passChangePage)
      }
    
      function turnLeft(){
    
        if(passChangePage < 0){
            console.log(passChangePage)

          return;
        } else{
            passSetChangePage(passChangePage - 1)
            console.log(passChangePage)
        }
      }

  return (
    <div className={passChangePage === pageNumber? "show" : "dontShow"}>
        <h1>Page</h1>
        <h1>{pageNumber}</h1>

        <div className="navigation">
            <img src={arrowLeft} alt="left arrow" onClick={turnLeft}/>
            <img src={arrowRight} alt="rigth arrow" onClick={turnRight}/>
        </div>
    </div>
  )
}

export default Page