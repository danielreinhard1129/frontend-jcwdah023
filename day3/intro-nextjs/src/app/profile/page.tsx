import Link from "next/link";
import styles from "./page.module.css";

function Profile() {
  return (
    <div>
      <h1 className={styles.biru}>Ini halaman profile</h1>

      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default Profile;
