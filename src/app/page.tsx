import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Info from "@/components/info/Info";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Info />
        <About />
        <Services />
        <Form />
      </main>
    </>
  );
}
