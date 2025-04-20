import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

function NavBar() {
  const menuItems = [
    "Home",
    "Bus Tickets",
    "Shop",
    "Blog",
    "About",
    "Contact Us",
  ];
  return (
    <div className="font-roboto">
      <Navbar disableAnimation isBordered className="bg-transparent">
        <NavbarBrand>
          <img src="/Logo.png" alt="" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="primary" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="primary" href="#">
              Bus Tickets
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="primary" href="#">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="primary" href="#">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="primary" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="primary" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, i) => (
            <Link className="w-fll" color="primary" href="#" size="lg">
              {item}
            </Link>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default NavBar;
