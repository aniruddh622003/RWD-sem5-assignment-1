import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RWD Minor Assignment 1</title>
        <meta
          name="description"
          content="Submission of Aniruddh Dev Upadhyay"
        />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            height: "80vh",
            width: "100vh",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className={styles.title}>Responsive Web Design</h1>
          <h2 className={styles.subtitle}>Assignment 1</h2>
          <h2 className={styles.description}>
            Submission by
            <p style={{ fontSize: "0.75em", margin: 0, color: "#555" }}>
              Aniruddh Dev Upadhyay
              <br />
              500086707
              <br />
              R2142201678
            </p>
          </h2>

          <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
            <div className={styles.grid}>
              <Link href="/library">
                <a className={styles.card}>
                  <h2>E-Library &rarr;</h2>
                  <p>Get book list and individual book details</p>
                </a>
              </Link>

              <Link href="/restaurant">
                <a className={styles.card}>
                  <h2>Restaurant &rarr;</h2>
                  <p>A Resturant landing page that showcases the dishes.</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
