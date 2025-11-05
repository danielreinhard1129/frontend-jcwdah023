import Navbar from "@/components/Navbar";
import BlogList from "./components/BlogList";
import Jumbotron from "./components/Jumbotron";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <BlogList />
    </div>
  );
};

export default Home;
