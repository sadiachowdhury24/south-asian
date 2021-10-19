import styled from 'styled-components'
import{ NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #CCFBF6;
    height: 80px;
    display:flex;
    justify-content: space-between;
    z-index:5;
    font-weight: bold;
`

export const NavLink = styled(Link)`
    color: #606060;
    display:flex;
    align-items: center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer;
    

&.active{
    color: #7BCAE9;
}
`
export const Bars = styled(FaBars)`
    display:none;
    

    @media screen and (max-width: 768px){
        display:block;
        //position: absolute;
        //top: 0;
        //right: 0;
        transform: translate(-100%, 75%);
        font-size: 5rem;
        cursor:pointer;
        
    }
`
export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    // margin-right:-200px;
    // margin-top: 10px;
    //padding: 1rem calc((100vw - 1000px) /2);

    @media screen and (max-width: 768px){
        display:none;
    }
`



