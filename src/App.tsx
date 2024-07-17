import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Leaderboard from "./components/Leaderboard"
import AddScorePopup from "./components/AddScorePopup"
import Footer from './components/Footer';
import './styles/App.css';
const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <Leaderboard />
        <Footer />
        {showPopup && <AddScorePopup onClose={togglePopup} />}
        <button className="add-score-button" onClick={togglePopup}>
          Add Score
        </button>
      </div>
    </Provider>
  );
};
export default App;
