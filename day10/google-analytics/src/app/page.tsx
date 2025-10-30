"use client";

const Home = () => {
  const onClick = () => {
    window.gtag("event", "click_button_contact", {
      label: "contact",
      value: 1,
    });

    alert("success");
  };

  return (
    <div>
      <h1>Home</h1>

      <button onClick={onClick}>Contact Me</button>
    </div>
  );
};

export default Home;
