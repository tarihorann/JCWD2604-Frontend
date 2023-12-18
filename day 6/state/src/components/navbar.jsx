/** @format */
import { Center } from "@chakra-ui/react";
import { routes } from "../routes/routes";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Center
      w={"full"}
      py={"8px"}
      px={"16px"}
      fontWeight={"600"}
      fontSize={"18px"}
      gap={"16px"}
      justifyContent={"left"}
      bgColor={"lightgrey"}
      pos={"sticky"}
      top={0}
    >
      {routes.map((route, key) => (
        <Link key={key} to={route.path}>
          {route.title}
        </Link>
      ))}
    </Center>
  );
}
export default NavbarComponent;
