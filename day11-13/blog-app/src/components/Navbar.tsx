const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <p className="text-2xl font-bold">Food Ninja</p>

      <div className="flex gap-4">
        <p>Blog</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
