import "./App.css";
import { TestComponent } from "./components/TestComponent";

const App: React.VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text={"hello"} />
      </header>
    </div>
  );
};

export default App;
