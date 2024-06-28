
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function NavbarTool() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="./public/logo.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white" >Estudio Albanese</span>
      </NavbarBrand>
      
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink class='px-5 flex text-black dark:text-white ' href="#">About</NavbarLink>
        <NavbarLink class='px-5 flex text-black dark:text-white ' href="#">Services</NavbarLink>
        <NavbarLink class='px-5 flex text-black dark:text-white ' href="#">Pricing</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
