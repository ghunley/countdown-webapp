import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from 'react-countdown';
import './style/style.css'

function App() {

    const updateWidthAndHeight = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

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
    getBgStyle();

    return (
        <div className="background" style={getBgStyle()}>
            <div class="message">Yuxiao's flight to Seattle is departing in</div>
            <Countdown
                date={1629240900000}
                renderer={renderer}
            />
        </div>
    );


    function getBgStyle() {
        let bgWidth = getBgWidth();
        let bgHeight = getBgHeight(bgWidth);

        return {
            width: `${bgWidth}px`,
            height: `750px`,
            backgroundSize: `${bgWidth}px ${bgHeight}px`,
        }
    }

    function getBgWidth() {
        return Math.min(windowWidth, 900).toString();
    }
    function getBgHeight(width) {
        return (16 * width) / 9;
    }
}

export default App;