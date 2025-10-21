import Jumbotron from "@/components/Jumbotron";
import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Profile />
      <Portfolio />
      <Skill />
    </div>
  );
}
