import * as React from 'react'
import "./NavButton.css"

import styled from 'styled-components'
import IconButtton from '@material-ui/core/IconButton'

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { Button } from '@mui/material';


function NavButton(){
    return(
    <div>
        {/* <IconButtton className= 'icons_arrow'> */}
            <FaArrowAltCircleLeft className='left-arrow'/>
        {/* </IconButtton> */}

        {/* <IconButtton className= 'icons_arrow'> */}
            <FaArrowAltCircleRight className='right-arrow'/>
        {/* </IconButtton> */}


        
    </div>
    

    )
}

export default NavButton