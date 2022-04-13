import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Body from '../components/body';
const Layout = (props) => {
  return (<>
  <Header/>
  <Body>{props.children}</Body>
  <Footer/>
  </>
  )
}

export default Layout;