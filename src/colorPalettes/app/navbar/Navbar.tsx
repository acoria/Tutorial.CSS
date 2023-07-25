import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>Images</li>
      </ul>
    </nav>
  );
};
