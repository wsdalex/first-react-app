import React from "react";
import Author from "./Author";
import Image from "./Image";
import Title from "./Title";

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

export default Book;
