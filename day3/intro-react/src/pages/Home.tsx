import Card from "../components/Card";
import { Link } from "react-router-dom";

function Home() {
  const name1 = "Budi";
  const name2 = "Siti";
  const name3 = "Joko";

  return (
    <div>
      <h1 style={{ color: "red", fontSize: "70px" }}>Home</h1>

      <Card name={name1} hobby="Mancing" />
      <Card name={name2} />
      <Card name={name3} />

      <Link to="/profile">Halaman Profile</Link>
    </div>
  );
}

export default Home;
