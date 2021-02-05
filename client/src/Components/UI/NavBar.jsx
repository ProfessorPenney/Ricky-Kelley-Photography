import React, { useState } from 'react'
import styled from 'styled-components'

const DivMain = styled.div`
   background-color: rgba(83, 83, 83, 0.137); // color
   position: absolute;
   top: 0;
   width: 100%;
   height: 60px;
`

const HrUnderline = styled.hr`
   position: absolute;
   left: 0;
   margin: 0;
   width: 0;
   border: none;
   height: 2px;
   background-color: white; // color
   transition: all 0ms linear 250ms, width 250ms linear;
   transform: rotate(0);
   transform-origin: left;
`

const A = styled.a`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-decoration: none;
   &:hover {
      background-color: rgba(180, 180, 180, 0.397); // color
      ${HrUnderline} {
         width: 100%;
         transform: rotate(180deg);
         left: 100%;
      }
   }
   @media only screen and (max-width: 1259px) {
      font-size: 20px;
      border-bottom: 1px white solid; // color
      height: 100%;
      &:nth-of-type(1) {
         border-top: 1px white solid; // color
      }
      &::last-of-type {
         border-bottom: none;
      }
   }
`

// const H2 = styled.h2`
//    display: none;
//    opacity: 0;
//    font-size: 30px;
//    transition: opacity 1.3s;
//    @media only screen and (max-width: 1259px) {
//       display: block;
//       margin-bottom: 5px;
//    }
// `

const HrBurger = styled.div`
   border: none;
   height: 4px;
   background-color: white; // color
   margin: 10px;
   border-radius: 2px;
`

const Hr1 = styled(HrBurger)`
   transform-origin: left;
   transition: transform 1s;
`

const Hr2 = styled(HrBurger)`
   transform-origin: right;
   transition: transform 1s;
`

const Hr3 = styled(HrBurger)`
   width: 40%;
`

const DivBurger = styled.div`
   z-index: 11;
   display: none;
   width: 60px;
   padding-right: 10px;
   cursor: pointer;
   position: absolute;
   right: 0;
   top: 4px;
   @media only screen and (max-width: 1259px) {
      display: block;
      position: ${props => (props.animate ? 'fixed' : 'absolute')};
      ${Hr1} {
         transform: ${props => (props.animate ? 'translateX(6px) rotate(45deg)' : 'translateX(0)')};
      }
      ${Hr2} {
         transform: ${props =>
            props.animate ? 'translateY(-14px) translateX(-6px) rotate(-45deg)' : 'translateX(0)'};
      }
      ${Hr3} {
         transition: ${props =>
            props.animate ? 'opacity 0.25s linear' : 'opacity 0.25s linear 0.75s'};
         opacity: ${props => (props.animate ? 0 : 1)};
      }
   }
`

const NavEl = styled.nav`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: stretch;
   color: white; // color
   @media only screen and (max-width: 1259px) {
      z-index: 10;
      position: fixed;
      left: 100%;
      top: 0;
      width: 40%;
      min-width: 300px;
      padding: 0 0 0 6%;
      background-color: white; // color
      flex-direction: column;
      justify-content: space-evenly;
      align-items: left;
      color: white; // color
      transform: ${props => (props.animate ? 'translateX(-100%)' : 'translateX(0)')};
      transition: transform 1s;
      background-color: #346c8d;
      border-left: 2px solid black; // color
      ${A} {
         opacity: ${props => (props.animate ? 1 : 0)};
      }
      ${H2} {
         opacity: ${props => (props.animate ? 1 : 0)};
      }
   }
`

const Li = styled.li`
   position: relative;
   margin: 0 20px;
   list-style: none;
`

const Nav = ({ projects }) => {
   const [mobileMenu, setMobileMenu] = useState(false)

   return (
      <DivMain>
         <NavEl animate={mobileMenu}>
            <a href='/' title='Home' className='logo'>
               <div>
                  <p>
                     <span className='letter-spacing'>
                        <span className='caps'>R</span>ICKY <span className='caps'>K</span>ELLE
                     </span>
                     Y
                  </p>
                  <hr />
                  <p>
                     <span className='letter-spacing'>PHOTOGRAPH</span>Y
                  </p>
               </div>
            </a>
            <A href='' key='' style={{ transition: 'opacity 1.3s 0.1s' }}>
               <Li>
                  title1
                  <HrUnderline />
               </Li>
            </A>
            <A href='' key='' style={{ transition: 'opacity 1.3s 0.2s' }}>
               <Li>
                  title2
                  <HrUnderline />
               </Li>
            </A>
            <A href='' key='' style={{ transition: 'opacity 1.3s 0.3s' }}>
               <Li>
                  title3
                  <HrUnderline />
               </Li>
            </A>
         </NavEl>
         <DivBurger animate={mobileMenu} onClick={() => setMobileMenu(value => !value)}>
            <Hr1 className='burg1' />
            <Hr2 className='burg2' />
            <Hr3 className='burg3' />
         </DivBurger>
      </DivMain>
   )
}

export default Nav
