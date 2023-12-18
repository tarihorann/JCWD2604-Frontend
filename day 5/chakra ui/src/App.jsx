/** @format */

import { Avatar, Button, Center } from "@chakra-ui/react";
import { CardList } from "./components/card";

function App() {
  return (
    <>
      <Center flexDir={"column"} style={{ flexDirection: "column" }}>
        <div>
          <input type="button" value="ok" />
        </div>

        <div>
          <Avatar src="https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg" />

          <Button>ok</Button>
        </div>
      </Center>
      <CardList />
    </>
  );
}

export default App;
