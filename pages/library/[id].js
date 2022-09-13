import React from "react";
import { libData } from "../../data/library";
import styles from "../../styles/Library.module.css";

export async function getStaticProps({ params }) {
  let allBookData = libData.books;
  let book = allBookData.filter((ele, idx) => idx == params.id);

  return {
    props: {
      book,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: libData.books.map((ele, idx) => ({
      params: { id: toString(idx) },
    })),
    fallback: true,
  };
}

const SingleBook = ({ book }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.inner}>
        <section className={styles.bread_crumb} style={{ marginBottom: 0 }}>
          <a href="/library">Home</a> {">"} <a>{book && book[0].title}</a>
        </section>
        <section style={{ marginBottom: 20 }}>
          <div className={styles.book_list_cont}>
            {book?.map((ele, idx) => (
              <div className={styles.single_book} key={`book-${idx}`}>
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
                <div className={styles.details}>
                  <h3>{ele.title}</h3>
                  <h5>{ele.author}</h5>
                  <h4>Date Finished: {ele.date_finished}</h4>
                  <br />
                  {ele.notes && (
                    <>
                      <h4>My reviews</h4>
                      <p>{ele.notes}</p>
                    </>
                  )}
                  <a href={ele.link} target="_blank" rel="noreferrer">
                    Read the book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 0, paddingBottom: 30 }}>
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
      </div>
    </div>
  );
};

export default SingleBook;
