import { Button, Card, Container, Navbar, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import PageLogo from "./PageLogo";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PathName } from "../consts";

function Headers() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>(PathName.Index);

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, []);

  //#ffffff66", //isDark ? "#0f111466" : "#ffffff66",
  //saturate(180%) blur(10px)
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      variant="sticky"
      maxWidth={"fluid"}
      // css={{ background: "rgba(0, 0, 0, 0.205)" }}
    >
      <Navbar.Brand>
        <PageLogo />
        {/* <Text b color="inherit" hideIn="xs">
          ACME
        </Text> */}
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight="true"
        hideIn="xs"
        variant="underline-rounded"
        css={{ fontFamily: "$secondary", textTransform: "uppercase" }}
      >
        <Navbar.Link
          href={PathName.Promotion}
          isActive={currentPath == PathName.Promotion}
        >
          Promotion
        </Navbar.Link>
        <Navbar.Link
          href={PathName.Services}
          isActive={currentPath == PathName.Services}
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href={PathName.Contracts}
          isActive={currentPath == PathName.Contracts}
        >
          Contracts
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link color="inherit" href="#">
            aaaaa
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link color="inherit" href="#">
            aaaaa
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link color="inherit" href="#">
            aaaaa
          </Link>
        </Navbar.CollapseItem>
        {/* {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))} */}
      </Navbar.Collapse>
      <Navbar.Content enableCursorHighlight showIn="xs" variant="underline">
        <Navbar.Toggle aria-label="toggle navigation" />
      </Navbar.Content>
    </Navbar>

    // <Navbar shouldHideOnScroll variant="sticky">
    //   <Navbar.Brand hideIn="xs">
    //     <PageLogo />
    //   </Navbar.Brand>
    //   <Navbar.Content hideIn="sm" variant="underline">
    //     <Navbar.Link href="/contracts">Contracts</Navbar.Link>
    //     <Navbar.Link isActive href="#">
    //       Customers
    //     </Navbar.Link>
    //     <Navbar.Link href="#">Pricing</Navbar.Link>
    //     <Navbar.Link href="#">Company</Navbar.Link>
    //   </Navbar.Content>
    //   <Navbar.Content>
    //     <Navbar.Link color="inherit" href="#">
    //       Login
    //     </Navbar.Link>
    //     <Navbar.Item>
    //       <Button auto flat>
    //         Sign Up
    //       </Button>
    //     </Navbar.Item>
    //   </Navbar.Content>
    // </Navbar>
  );
}

export default Headers;
