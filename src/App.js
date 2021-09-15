import './App.css';
import { CenteredCard } from './components/CenteredCard';

function App() {
  return (
    <div className="App">
      <span className="App-header">
        <CenteredCard> <h1>Children 1</h1> </CenteredCard>
        <CenteredCard> <h1>Children 2</h1> </CenteredCard>
        <CenteredCard> <h1>Children 3</h1> </CenteredCard>
      </span>
    </div>
  );
}

export default App;
