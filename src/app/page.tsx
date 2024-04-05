"use client";
import styles from "./page.module.scss";
import Header from "@/components/pages/header/Header";
import Info from "@/components/pages/info/Info";
import About from "@/components/pages/about/About";
import Services from "@/components/pages/services/Services";
import Form from "@/components/pages/form/Form";
import Contact from "@/components/pages/contacts/Contact";
import Footer from "@/components/pages/footer/Footer";
import { useRef } from "react";

export default function Home() {
  const scrollRefAbout = useRef<HTMLDivElement>(null);
  const scrollRefServices = useRef<HTMLDivElement>(null);
  const scrollRefForm = useRef<HTMLDivElement>(null);
  const scrollRefContacts = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        referAbout={scrollRefAbout}
        referServices={scrollRefServices}
        referContacts={scrollRefContacts}
        referForm={scrollRefForm}
      />
      <main className={styles.wrapper}>
        <Info refer={scrollRefForm} />
        <About refer={scrollRefAbout} />
        <Services refer={scrollRefServices} />
        <Form refer={scrollRefForm} />
        <Contact refer={scrollRefContacts} />
        <Footer />
      </main>
    </>
  );
}
