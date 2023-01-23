import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";

const ModuleA = dynamic(() => import("app2/ModuleA"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <header>App1 Header</header>
        <nav>
          <h2>App1 Menu</h2>
        </nav>
        <ModuleA />
        <footer>App1 Footer</footer>
      </main>
    </>
  );
}
