import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Call the Parent Container to display Movies information.[PhyoMin]*/}

        <Container />
      </header>
    </div>
  );
}

export default App;
