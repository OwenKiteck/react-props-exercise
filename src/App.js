import Exercise from "./exercise/Exercise"

function App() {
  return (
    <div>
      <Exercise />
      <br />
      <Exercise good="Awesome" bad="Terrible"/>
    </div>
  );
}

export default App;
