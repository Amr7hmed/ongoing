import React, { Component  } from 'react'
import BottomNavbar from './BottomNavbar/index.jsx';
import UpperNavbar from './UpperNavbar/index.jsx';

export class Navbar extends Component {
  render() {
    return (
      <header>
        <UpperNavbar/>
        <BottomNavbar/>
      </header>
    )
  }
}

export default Navbar