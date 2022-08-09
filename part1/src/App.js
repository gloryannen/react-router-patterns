import "./App.css";
import Nav from "./Nav";
import Routing from "./Routes";
import whiskey from "./img/dogs/whiskey.jpg";
import duke from "./img/dogs/duke.jpg";
import perry from "./img/dogs/perry.jpg";
import tubby from "./img/dogs/tubby.jpg";

function App() {
  return (
    <div className="App">
      <Nav dogs={dogs} />
      <Routing dogs={dogs} />
    </div>
  );
}

export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];
App.defaultProps = { dogs };

export default App;
