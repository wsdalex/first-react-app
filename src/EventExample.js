import React from "react";

const EventExample = () => {
  const handleFormInput = () => {
    console.log("hello world");
  };

  const handleButtonClick = () => {
    alert("form submitted");
  };

  return (
    <section>
      <form action="">
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

export default EventExample;
