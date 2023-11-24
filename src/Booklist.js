import React from "react";
import Book from "./Book";
import { books } from "./books";

const Booklist = () => {
  return (
    <div>
      <h1>Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </div>
  );
};

export default Booklist;
