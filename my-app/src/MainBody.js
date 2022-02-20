import * as React from 'react'
import "./MainBody.css"
// import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { IconButton } from '@mui/material'


function MainBody(){
    return(

        <div className ="float-container">
            <div className='right-arrow'>
                <IconButton>
                    <IoIosArrowForward  onClick = {console.log("Pelase")} />
                </IconButton>
            </div>

            <div className='left-arrow'>
                <IconButton>
                    <IoIosArrowBack onClick= {console.log("Heetsa")}/>
                </IconButton>

            </div>
        

            <div className ="float-child_left">
                <div className ="green"><img src = "https://i.pinimg.com/736x/63/13/43/63134376c49ec9c4392646ef757db4df.jpg"
                className="photo"/></div>
            </div>
            
            <div className ="float-child_right">
            
                <div className ="blue">Float Column 2
                </div>
            </div>
        
      </div>


    )
}

export default MainBody