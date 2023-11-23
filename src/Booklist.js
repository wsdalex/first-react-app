import React from "react";
import Book from "./Book";

const firstBook = {
  img: "./images/Guinness.jpg",
  title: "Guinness World Records 2024",
  author: "Guinness World Records",
};

const secondBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/71fk5JFlZzL._AC_UL900_SR900,600_.jpg",
  title: "Dear Santa",
  author: "Rod Campbell",
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

export default Booklist;
