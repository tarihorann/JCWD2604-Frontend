/** @format */

import { Avatar, Box, Center, Flex } from "@chakra-ui/react";

function Card({ avatarUrl, username, imgUrl }) {
  return (
    <Box w={"384px"} m={"auto"}>
      <Flex
        px={"24px"}
        justifyItems={"center"}
        gap={"10px"}
        py={"8px"}
        border={"2px solid  rgb(226 232 240)"}
      >
        <Avatar src={avatarUrl} alt="" w={"48px"} />
        <Center
          fontWeight={"600"}
          textTransform={"capitalize"}
          fontSize={"18px"}
        >
          {username}
        </Center>
      </Flex>
      <img src={imgUrl} alt="" style={{ aspectRatio: 1, objectFit: "cover" }} />
    </Box>
  );
}
export default Card;

export function CardList() {
  const cards = [
    {
      avatarUrl:
        "https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg",
      imgUrl:
        "https://www.fauna-flora.org/wp-content/uploads/2017/01/AdobeStock_127901077.jpeg",
      username: "tiger",
    },
    {
      avatarUrl:
        "https://www.shutterstock.com/image-photo/close-portrait-angry-tiger-600nw-2320794599.jpg",
      imgUrl:
        "https://cdn.britannica.com/76/92676-050-F91A67C7/Sumatran-tiger-water.jpg",
      username: "tiger2",
    },
    {
      avatarUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
      imgUrl:
        "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2022/03/16/USATODAY/usatsports/imageForEntry5-ODq.jpg?width=1365&height=768&fit=crop&format=pjpg&auto=webp",
      username: "lion",
    },
  ];
  return (
    <Center w="full" flexDir={"column"} gap={"24px"}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Center>
  );
}
