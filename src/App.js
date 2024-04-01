import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Posts } from './components/Posts/Posts';
import { Comments } from './components/Comments/Comments';
import { SubReddits } from './components/SubReddits/SubReddits';
import { Vote } from './components/Vote/Vote';
import { Topics } from './components/Topics/Topics';
import { Reddit } from './components/Reddit/Reddit';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className='box'>
        <Posts />
        <Comments />
        <SubReddits />
      </div>
      <Vote />
      <Topics />
      
    </div>
  );
}

export default App;
