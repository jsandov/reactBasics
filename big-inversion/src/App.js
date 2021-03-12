import logo from "./logo.svg";
import "./App.css";
import Person from "./components/person";

function App() {
  return (
    <div className="App">
      <Person lastName="Doe" firstName="Jane" age={48} hairColor="Black" />
      <Person lastName="Smith" firstName="John" age={88} hairColor="Brown" />
      <Person
        lastName="Fillmore"
        firstName="Millard"
        age={50}
        hairColor="Brown"
      />
      <Person lastName="Smith" firstName="Maria" age={23} hairColor="Brown" />
    </div>
  );
}

export default App;
