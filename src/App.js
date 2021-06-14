import React from "react";
import Button from "./components/Button/Button";
import CardList from "./components/CardList/CardList";

const cards = [
  {
    image:
      "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000",
    title: "House",
    description: "Lorem ipsum is the dummy text used in print...",
  },
  {
    image:
      "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000",
    title: "House",
    description: "Lorem ipsum is the dummy text used in print...",
  },
  {
    image:
      "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000",
    title: "House",
    description: "Lorem ipsum is the dummy text used in print...",
  },
  {
    image:
      "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000",
    title: "House",
    description: "Lorem ipsum is the dummy text used in print...",
  },
  {
    image:
      "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000",
    title: "House",
    description: "Lorem ipsum is the dummy text used in print...",
  },
  {
    image:
      "https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000",
    title: "House",
    description: "Lorem ipsum is the dummy text used in print...",
  },
];

const App = () => (
  <>
    <h1>Hello</h1>
    <Button>hiiii</Button>
    <CardList cards={cards} />
  </>
);

export default App;
