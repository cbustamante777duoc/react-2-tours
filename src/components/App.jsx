import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Tour from './Tour';
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours)

    } catch (error) {
      setLoading(false);
      console.log(error)

    }
  }

  const removeTours = (id) => {
    const newTours = tours.filter(item => item.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>Refresh</button>
        </div>
      </main>
    )

  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  )

}

export default App
