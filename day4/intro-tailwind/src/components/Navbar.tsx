import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between items-center py-2 px-4">
      <img
        src="/logo.png"
        alt="logo"
        className="w-[140px] h-[30px] md:h-[40px] md:w-[186px]"
      />

      <div className="hidden md:flex gap-4">
        <p>Home</p>
        <p>Portfolio</p>
        <p>About me</p>
        <p>Testimonials</p>
      </div>

      <button className="hidden md:block border border-[#5E3BEE] px-8 py-4 text-[#5E3BEE] rounded-md">
        Contact Me
      </button>

      <HiOutlineMenu className="block md:hidden text-2xl" />
    </div>
  );
}

export default Navbar;
