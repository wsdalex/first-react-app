import React from "react";
import Book from "./Book";
import EventExample from "./EventExample";

const books = [
  {
    img: "./images/Guinness.jpg",
    title: "Guinness World Records 2024",
    author: "Guinness World Records",
    id: 1,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71fk5JFlZzL._AC_UL900_SR900,600_.jpg",
    title: "Dear Santa",
    author: "Rod Campbell",
    id: 2,
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} book={book} />;
      })}
    </section>
  );
};

export default Booklist;
