import React, { useState } from "react";
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
import { Link as RouterLink, useLocation } from "react-router";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar() {
  const location = useLocation();
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Bus Tickets", path: "/tickets" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="font-roboto">
      <Navbar disableAnimation isBordered className="bg-transparent relative">
        <NavbarBrand>
          <img src="/Logo.png" alt="Logo" />
        </NavbarBrand>

        {/* Desktop Navbar */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) =>
            item.name === "About" ? (
              <NavbarItem key={item.name} className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setIsAboutHovered(true)}
                  onMouseLeave={() => setIsAboutHovered(false)}
                >
                  <RouterLink
                    to={item.path}
                    className={`hover:text-primary/55 transition-colors duration-300 ${
                      isActive(item.path) ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </RouterLink>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-1 bg-white border shadow-md rounded-md p-3 w-40 z-50 transition-opacity duration-200 ${
                      isAboutHovered ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <RouterLink
                      to="/about/video"
                      className="block text-default hover:text-primary py-1"
                    >
                      Video
                    </RouterLink>
                    <RouterLink
                      to="/about/gallery"
                      className="block text-default hover:text-primary py-1"
                    >
                      Gallery
                    </RouterLink>
                  </div>
                </div>
              </NavbarItem>
            ) : (
              <NavbarItem key={item.name} isActive={isActive(item.path)}>
                <RouterLink
                  to={item.path}
                  className={`hover:text-primary/55 transition-colors duration-300 ${
                    isActive(item.path) ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.name}
                </RouterLink>
              </NavbarItem>
            )
          )}

          {/* Extra NavItems only on /shop */}
          {location.pathname === "/shop" && (
            <>
              <NavbarItem>
                <RouterLink
                  to="/cart"
                  className="text-primary hover:text-primary/55 transition-colors duration-300 font-extrabold"
                >
                  Cart <FontAwesomeIcon icon={faCartPlus} />
                </RouterLink>
              </NavbarItem>
              <NavbarItem>
                <RouterLink
                  to="/sign-up"
                  className="text-primary hover:text-primary/55 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faUser} />

                </RouterLink>
              </NavbarItem>
            </>
          )}
        </NavbarContent>

        {/* Mobile toggle */}
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link
                as={RouterLink}
                to={item.path}
                className={`w-full ${
                  isActive(item.path) ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Sub Links (About dropdown in mobile) */}
          {isActive("/about") && (
            <>
              <NavbarMenuItem>
                <Link as={RouterLink} to="/about/video" className="w-full">
                  Video
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link as={RouterLink} to="/about/gallery" className="w-full">
                  Gallery
                </Link>
              </NavbarMenuItem>
            </>
          )}

          {/* Extra Mobile NavItems only on /shop */}
          {location.pathname === "/shop" && (
            <>
              <NavbarMenuItem>
                <Link as={RouterLink} to="/shop/offer" className="w-full">
                  Offers
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link as={RouterLink} to="/shop/deals" className="w-full">
                  Deals
                </Link>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default NavBar;
