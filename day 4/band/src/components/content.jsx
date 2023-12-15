/** @format */

function ContentComponent() {
  return (
    <>
      <div id="band">
        <h1>QUEEN</h1>
        <i>we love music</i>
        <p>
          Queen are a British rock band formed in London in 1970 by Freddie
          Mercury (lead vocals, piano), Brian May (guitar, vocals), and Roger
          Taylor (drums, vocals), later joined by John Deacon (bass). Their
          earliest works were influenced by progressive rock, hard rock, and
          heavy metal, but the band gradually ventured into more conventional
          and radio-friendly works by incorporating further styles, such as
          arena rock and pop rock. Before forming Queen, May and Taylor had
          played together in the band Smile. Mercury was a fan of Smile and
          encouraged them to experiment with more elaborate stage and recording
          techniques. He joined in 1970 and suggested the name "Queen". Deacon
          was recruited in February 1971, before the band released their
          self-titled debut album in 1973. Queen first charted in the UK with
          their second album, Queen II, in 1974. Sheer Heart Attack later that
          year and A Night at the Opera in 1975 brought them international
          success.
        </p>
        <BandListComponent />
      </div>
    </>
  );
}
export default ContentComponent;

function BandListComponent() {
  const members = [
    {
      src: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/03/05/Pictures/_9a869ac0-5ea2-11ea-ab89-cb4d4e6220f6.jpg",
      name: "Freddie Mercury",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQbiLaualsT4vhf5KrIfAkTATqeSEHVPPA888YNth_C-eB7IszQxTkfLEcaK9rjmr8GY5ay696wEWSuVes",
      name: "Brian May",
    },
    {
      src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbs8iE-8MDBW15wk7XhIQd87qSz0Zt3rC5rr8loTeR1cEvGlw2",
      name: "John Deacon",
    },
    {
      src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRBf8Hz0hWUWcRwEVaIYgMHlRkHzetHsWW3TS4u4n9V-2WyMo7x6iJ2PcvmtBIJ0RCwDETwaUGyUHr-B-Q",

      name: "Roger Taylor",
    },
  ];
  return (
    <>
      <div className="grid">
        {members.map((val, idx) => (
          // <CardComponent key={idx} src={val.src} name= {val.name} />
          <CardComponent key={idx} {...val} />
        ))}
      </div>
    </>
  );
}

function CardComponent({ src, name }) {
  return (
    <>
      <div className="member">
        <p>{name}</p>
        <img src={src} alt="" />
      </div>
    </>
  );
}
