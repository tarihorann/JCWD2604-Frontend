/** @format */

function InstagramCard({ avatarUrl, username, imgUrl }) {
  return (
    <div className="w-96 m-auto	">
      <div className=" px-6 flex items-center gap-[10px] py-2  border-slate-200 border-2">
        <img
          src={avatarUrl}
          alt=""
          className=" aspect-square rounded-full w-12"
        />
        <span className=" font-semibold capitalize text-lg">{username}</span>
      </div>
      <img className=" aspect-square  object-cover " src={imgUrl} alt="" />
    </div>
  );
}
export function InstagramCardList() {
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
    <div className=" flex w-full flex-col gap-6 content-center">
      {cards.map((card, index) => (
        <InstagramCard key={index} {...card} />
      ))}
    </div>
  );
}
