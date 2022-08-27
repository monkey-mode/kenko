import { Button, Card, Container, Navbar, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import PageLogo from "./PageLogo";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Headers() {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScroll(latest);
    });
  }, []);

  return (
    <Navbar shouldHideOnScroll variant="sticky" >
      <Navbar.Brand hideIn="xs">
        <PageLogo />
      </Navbar.Brand>
      <Navbar.Content hideIn="sm" variant="underline">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default Headers;
