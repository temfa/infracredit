// import Image from "next/image";
import styles from "./page.module.css";
import Login from "./Auth/Login/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
