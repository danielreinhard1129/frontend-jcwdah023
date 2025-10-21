import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1 className={styles.biru}>Profile</h1>

      <Link to="/">Halaman beranda</Link>
    </div>
  );
};

export default Profile;
