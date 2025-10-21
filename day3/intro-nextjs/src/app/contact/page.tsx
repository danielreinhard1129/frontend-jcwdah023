import Link from "next/link";

function Contact() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Ini Halaman Contact</h1>

      <Link href="/profile">Profile</Link>
    </div>
  );
}

export default Contact;
