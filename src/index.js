import React from "react";
import ReactDOM from "react-dom";

//create your function here
const BootstrapCard = () => {
  const image =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg";
  const header = "Bob Dylan";
  const cardText =
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influentialfigure in popular music and culture for more than five decades.";
  const link = "https://en.wikipedia.org/wiki/Bob_Dylan";
  const linkLabel = "Go to wikipedia";
  return (
    <div class="card m-5">
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{header}</h5>
        <p class="card-text">{cardText}</p>
        <a href={link} class="btn btn-primary">
          {linkLabel}
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(<BootstrapCard />, document.getElementById("root"));

//remember to use ReactDOM.render to include the component into the website
