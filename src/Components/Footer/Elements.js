// import styled from 'styled-components'
// import { Link as LinkRouter } from 'react-router-dom'

// export const Container = styled.footer
// `
//   background-color: #17161F;
// `;

// export const Wrapper = styled.div
// `
//   padding: 48px 24px;
//   display: flex;
//   flex-diretion: column;
//   justify-content: center;
//   align-items:center;
//   max-width:1100px;
//   margin 0 auto;
// `

// // export const Logo = styled(LinkRouter)
// // `
// //   color: #fff;
// //   justify-self: flex-start;
// //   cursor: pointer;
// //   font-size: 1.5rem;
// //   display: flex;
// //   align-items: center;
// //   margin-left: 24px;
// //   font-weight: bold;
// //   text-decoration: none;
// // `

// export const Icon = styled.div`
//   display: flex;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translate(-200%, 60%);
//   font-size: 1.8rem;
//   cursor: pointer;
//   color: #fff;
//   }
// `;

import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Container = styled.footer
`
  width: 100%;
  height: 150px;
  background-color: #17161F;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  margin-top: 200px; 
`

export const Icon = styled.div
`
  color: white;
  margin: 10px;
  font-size: 70px;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  @media screen and (max-width: 768px){
    font-size: 50px;
  }
`

export const P = styled.p
`
  color: white;
`