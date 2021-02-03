import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {Link } from 'react-router-dom';

class NavBar extends React.Component {

    state ={
        isOpen: false
    }

    toggle =() =>{
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return (
        
        <Navbar color="dark" dark expand="md">
                <div className="container">
                    <Link to ="/"><NavbarBrand>reactstrap</NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/posts"><NavLink>Posts</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/users"><NavLink>Users</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/albums"><NavLink>Gallery</NavLink></Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>Logout</NavbarText>
                    </Collapse>
                </div>
        </Navbar>
    


        )
    }
    

}

export default NavBar;