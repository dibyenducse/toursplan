import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from  './Tours';
const url = 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_api_fetch_await';
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(url);
      const tours = await response.json()
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();
  },[])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    
    )
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
