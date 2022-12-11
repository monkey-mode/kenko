import { Navbar,Link } from "@nextui-org/react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PathName } from "../consts";
import PageLogo from "./PageLogo";

function Headers() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>(PathName.Index);

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

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
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight="true"
        hideIn="xs"
        variant="highlight-solid-rounded"
        css={{ fontFamily: "$secondary" }}
        activeColor={"primary"}
      >
        <Navbar.Link
          href={PathName.Index}
          isActive={currentPath == PathName.Index}
        >
          Home
        </Navbar.Link>
        {/* <Navbar.Link
          href={PathName.Promotion}
          isActive={currentPath == PathName.Promotion}
        >
          Promotion
        </Navbar.Link> */}

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
          <Link color="text" href={PathName.Index}>
            Home
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link color="text" href={PathName.Promotion}>
            Promotion
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link color="text" href={PathName.Services}>
            Services
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link color="text" href={PathName.Contracts}>
            Contracts
          </Link>
        </Navbar.CollapseItem>
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
