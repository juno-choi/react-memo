import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainerComponent';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo1',
      content: 'This is Memo 1',
      createdAt: 1736810983471,
      updatedAt: 1736810983471,
    },
    {
      title: 'Memo2',
      content: 'This is Memo 2',
      createdAt: 1736810983475,
      updatedAt: 1736810983475,
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
