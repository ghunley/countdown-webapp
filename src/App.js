import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from 'react-countdown';
import './style/style.css'

function App() {

    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
        return(
            <table class="countdown-container">
                <tr>
                    <td class="countdown-number">{days}</td>
                    <td class="countdown-number">{hours}</td>
                    <td class="countdown-number">{minutes}</td>
                    <td class="countdown-number">{seconds}</td>
                </tr>
                <tr>
                    <td class="countdown-label">days</td>
                    <td class="countdown-label">hours</td>
                    <td class="countdown-label">minutes</td>
                    <td class="countdown-label">seconds</td>
                </tr>
            </table>
        );
        }
    };

  return (
      <div className="background">
        <div class="message">Yuxiao's flight to Seattle is departing in</div>
        <Countdown
            date={1629240900000}
            renderer={renderer}
        />
      </div>
  );
}

export default App;