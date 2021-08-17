import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from 'react-countdown';
import './style/style.css'
import Confetti from 'react-confetti'
import Chihuahua from './images/chihuahua.gif'

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
    const Completionist = () => (
        <div class="container">
            <Confetti width={windowWidth} height={windowHeight} />
            <div class="message" style={getMessageStyle()}>Yuxiao's flight has departed!</div>
            <div class="image"><img src={Chihuahua} width="300" height="175"/></div>
            <div class="message" style={getMessageStyle()}>See you in Seattle!</div>
        </div>
    );

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
        return(
            <div class="container">
                <div class="message" style={getMessageStyle()}>Yuxiao's flight to Seattle is departing in</div>
                <table class="countdown-container">
                    <tr>
                        <td class="countdown-number" style={getCountdownBoxStyle()}>{days}</td>
                        <td class="countdown-number" style={getCountdownBoxStyle()}>{hours}</td>
                        <td class="countdown-number" style={getCountdownBoxStyle()}>{minutes}</td>
                        <td class="countdown-number" style={getCountdownBoxStyle()}>{seconds}</td>
                    </tr>
                    <tr>
                        <td class="countdown-label">days</td>
                        <td class="countdown-label">hours</td>
                        <td class="countdown-label">minutes</td>
                        <td class="countdown-label">seconds</td>
                    </tr>
                </table>
            </div>
        );
        }
    };

    return (
        <div className="background" style={getBgStyle()}>
            <Countdown
                date={1629240900000}
                renderer={renderer}
            />
        </div>
    );


    function getCountdownBoxStyle() {
        let width = Math.min(150, getBgWidth() / 4);
        let fontSize = Math.min(100, Math.floor(width * 0.666));
        return {
            width: `${width}px`,
            fontSize: `${fontSize}px`,
        }
    }

    function getMessageStyle() {
        let fontSize = Math.min(50, Math.floor(getBgWidth() / 12))
        return {
            fontSize: `${fontSize}px`,
        }
    }

    function getBgStyle() {
        let bgWidth = getBgWidth();
        let bgHeight = getBgHeight(bgWidth);
        let height = Math.min(750, windowHeight, bgHeight);

        return {
            width: `${bgWidth}px`,
            height: `${height}px`,
            backgroundSize: `${bgWidth}px ${bgHeight}px`,
        }
    }

    function getBgWidth() {
        return Math.min(windowWidth, 900)
    }
    function getBgHeight(width) {
        return (16 * width) / 9;
    }
}

export default App;