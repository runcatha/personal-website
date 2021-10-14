import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
    this.closeMenu()
  };

  alwaysOptions = (
    <>
      <NavLink className="link" to="/projects">Projects</NavLink>
      <a className="link" href="https://drive.google.com/file/d/1MHDD_8j3FSJeQWfyxnmNnz-pJ9SmmAN8/view?usp=sharing">Resume</a>
      <NavLink className="link" to="/about-me">About Me</NavLink>
      <NavLink className="link" to="/contact">Contact</NavLink>
    </>
  );

  render() {
    return (
      // Pass on our props
      <Menu
        rightuseHistory
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc}
      >
        <main id="page-wrap">
          {this.alwaysOptions}
          {/* {this.props.currentUser ? this.authenticatedOptions : this.unauthenticatedOptions} */}
        </main>
      </Menu>
    )
  }
}