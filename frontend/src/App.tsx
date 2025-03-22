import { useState } from 'react'; // Importing useState hook for managing state
import reactLogo from './assets/react.svg'; // Importing React logo (not used in the UI)
import viteLogo from '/vite.svg'; // Importing Vite logo (not used in the UI)
import './App.css'; // Importing global CSS styles
import BookList from './BookList'; // Importing the BookList component

function App() {
  // State variable 'count' with an initial value of 0 (not used in the UI)
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Render the BookList component */}
      <BookList />
    </>
  );
}

export default App; // Exporting the App component as default
