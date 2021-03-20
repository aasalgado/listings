import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { initListings } from './redux/listingsReducer';

function App() {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings)
  
  useEffect(() => {
    dispatch(initListings());
  }, [dispatch]);
  return (
    <div className="App">
      {listings.map((listing) => (
        <p>{listing.name}, {listing.age}</p>
      ))}
    </div>
  );
}

export default App;