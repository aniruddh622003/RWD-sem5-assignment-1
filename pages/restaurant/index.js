import Head from "next/head";
import Link from "next/link";
import React from "react";
import { restaurantData } from "../../data/resturant";
import styles from "../../styles/Restaurant.module.css";

export async function getStaticProps() {
  let menuData = restaurantData.categorys;
  return {
    props: {
      menu: menuData,
    },
  };
}

const Restaurant = ({ menu }) => {
  return (
    <div>
      <Head>
        <title>The Best Restaurant</title>
        <meta
          name="description"
          content="Restaurant website for RWD assignment 1"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <section className={styles.header}>
        <div>
          <Link href="#home">Home</Link>
        </div>
        <div>
          <Link href="#menu">Menu</Link>
        </div>
        <div>
          <Link href="#about">About</Link>
        </div>
      </section>
      <section className={styles.hero} id="home">
        <div className={styles.title}>
          <h1>The best food you have ever tasted.</h1>
        </div>
        <div className={styles.menu}>
          <Link href="#menu">See the menu</Link>
        </div>
      </section>
      <section className={styles.menu} id="menu">
        <h1>Menu</h1>
        <div className="container-fluid">
          <div className="row">
            {menu?.map((ele, id) => (
              <div key={`menu-item-${id}`} className="col-md-4">
                <div className={styles.menu_item}>
                  <div className={styles.top}>{ele?.name}</div>
                  <div className={styles.content}>
                    {ele["menu-items"]?.map((item, id) => (
                      <div
                        key={`item-${ele?.name}-${item?.name}`}
                        className={styles.item}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "start",
                            gap: "20px",
                          }}
                        >
                          <h1>{item?.name}</h1>
                          <span className={styles.price}>
                            {item["sub-items"][0]?.price}
                          </span>
                        </div>
                        <p>{item?.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.about} id="about">
        <div className="container-fluid">
          <h1 className={styles.title}>About Us</h1>
          <div className={styles.content}>
            The Best Restaurant was founded in blabla by Mr. Chef Supreme in
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/cozy-restaurant-tables-ready-dinner-39875776.jpg"
            alt="about-image"
          />
          <div className={styles.working_hrs}>
            <h1>Working Hours</h1>
            <div>
              <p>Mon & Tue CLOSED</p>
              <p>Wednesday 10am - 10pm</p>
              <p>Thursday 10am - 10pm</p>
              <p>Friday 10am -10pm</p>
              <p>Saturday 10am - 7pm</p>
              <p>Sunday 10am - 11pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
