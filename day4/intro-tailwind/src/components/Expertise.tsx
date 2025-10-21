import Card from "./Card";

function Expertise() {
  const skills = [
    "Strategy & Direction",
    "Branding & Logo",
    "UI & UX Design",
    "Webflow Development",
  ];

  return (
    <div className="container mx-auto py-8 md:py-24 px-4">
      <p className="font-bold text-sm">My Skills</p>
      <p className="font-bold text-3xl md:text-5xl">My Expertise</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {skills.map((skill, index) => {
          return <Card key={index} title={skill} />;
        })}
      </div>
    </div>
  );
}

export default Expertise;
