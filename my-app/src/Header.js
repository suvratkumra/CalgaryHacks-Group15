import * as React from 'react'
import "./Header.css"
import {BsPersonFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
import styled from 'styled-components'
import IconButtton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

function Header(){
    return(
        <div className = "header">
            <IconButtton>
                <PersonIcon fontSize = "large" className='header__icon'/>   
            </IconButtton>
 
            Put logo here 
           
            <IconButtton>
                <SettingsIcon fontSize = "large" className='header__icon'/>
            </IconButtton>

        </div>
    )
}

export default Header