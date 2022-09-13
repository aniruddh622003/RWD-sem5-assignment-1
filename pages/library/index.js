import Link from "next/link";
import React from "react";
import library from "../../data/library";
import styles from "../../styles/Library.module.css";

export async function getStaticProps() {
  let allBookData = library.books;
  let imagebooks = allBookData.filter((ele) => ele.image != null);
  let noImagebooks = allBookData.filter((ele) => ele.image == null);
  return {
    props: {
      books: [...imagebooks, ...noImagebooks],
    },
  };
}

const index = ({ books }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.inner}>
        <section>
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/SKVcQnyEIT8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ marginTop: "30px" }}
          ></iframe>
          <center>
            <h1 style={{ fontSize: "40px" }}>Welcome to eLibrary</h1>

            <p>
              The eLibrary, with its wide range of collection of knowledge
              resources and innovative information services, fills an essential
              requisite in the intellectual pursuits of our students, faculty
              and the surrounding community. eLibrary, a hybrid Centre with the
              state-of-the-art technological applications holds knowledge
              resources predominantly related to engineering, science &
              technology, management, law, Allied Health Science and allied
              subjects. The entire collection of books, print journals/magazines
              along with its wide range of e-collection including e-journals,
              e-books, online databases, non-book materials etc., are accessible
              through the Institute network. Our mission is to facilitate
              convenient and user-friendly access to current, global and
              relevant information by identifying, acquiring, organizing and
              retrieving information in various formats (print & non-print) to
              serve the information needs of the academic fraternity of UPES to
              meet their teaching, research, consulting, training and learning
              requirements.
            </p>
          </center>
        </section>
        <section style={{ marginBottom: 0 }}>
          <h1>Browse our book catalogue</h1>
          <div className={styles.book_list_cont}>
            {books.map((ele, idx) => (
              <div className={styles.book_list_item} key={`book-${idx}`}>
                <Link href={`/library/${idx}`}>
                  <img
                    src={
                      ele.image ??
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                    }
                    style={{
                      margin: ele.image ? "0" : "100px 0",
                      boxShadow: !ele.image && "none",
                    }}
                  />
                </Link>
                <div className={styles.details}>
                  <h3>{ele.title}</h3>
                  <h5>{ele.author}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
