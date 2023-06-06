import './App.css';
import { Column } from './components/Column';
import { SearchBar } from './components/SearchBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">
            Jirafy Board
        </span>

        <div>
          <SearchBar />
        </div>
        <div className='container'>
          <Column tasks={""}/>
          <Column tasks={""}/>
          <Column tasks={""}/>
          <Column tasks={""}/>
        </div>
    </div>
  );
}

export default App;
