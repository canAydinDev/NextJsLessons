"use client"
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import menuItems from "./menu.json";
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" as={Link}>
          <Image src="/images/logo.png" width={40} height={40} alt="canAydin Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item,index)=> (
              <Nav.Link key={index} href={item.url} as={Link}>
                {item.title}
              </Nav.Link> 
            ))}        
          </Nav>
        </Navbar.Collapse>

        <Link href={"/dashboard"} className='rounded bg-secondary p-1'>Dashboard</Link>
      </Container>
    </Navbar>
  )
}

export default Header