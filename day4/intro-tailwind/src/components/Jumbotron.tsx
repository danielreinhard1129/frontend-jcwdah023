function Jumbotron() {
  return (
    <div className="bg-[#F5FCFF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 md:py-24 gap-12">
          {/* left */}
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-xl font-bold">Hey, I am John</p>

            <h1 className="text-4xl md:text-6xl font-bold">
              I create <span className="text-[#5E3BEE]">product design</span>{" "}
              and brand experience
            </h1>

            <p className="text-lg md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <button className="border px-8 py-4 bg-[#5E3BEE] text-white rounded-lg w-fit">
              Get In Touch
            </button>
          </div>

          {/* right */}
          <div>
            <img src="/thumbnail.png" alt="thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
