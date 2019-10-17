import React, { Component } from 'react';
import Navbar from './Navbar';
/*import Container from './Container';*/
import Footer from './Footer';
import Banner from './Banner';
/*import images from '../images';*/

// Main App
class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        navMessage: 'Click an image to begin!',
        allImages: this.shuffle,
        shake: false
    }
    imgArray = ["https://cdna.artstation.com/p/assets/images/images/017/732/628/large/even-amundsen-2da23d94-7e10-4295-9223-969af0b4d265.jpg?1557149418", "https://cdnb.artstation.com/p/assets/images/images/004/239/951/large/manuel-castanon-knight-girl-high-resolution.jpg?1562781751", "https://cdna.artstation.com/p/assets/images/images/006/606/388/large/zudarts-lee-170601-01.jpg?1499878487", "https://cdna.artstation.com/p/assets/images/images/013/225/918/large/frederic-arsenault-full-beauty-name.jpg?1538637573", "https://cdna.artstation.com/p/assets/images/images/013/421/986/large/jaromir-hrivnac-20181005-sp5ii.jpg?1539543619", "https://cdna.artstation.com/p/assets/images/images/006/623/886/large/jonah-booth-remmers-knight.jpg?1500015016", "https://cdnb.artstation.com/p/assets/images/images/004/736/527/large/grzegorz-rutkowski-knight-study-4-1200.jpg?1485890644", "https://cdna.artstation.com/p/assets/images/images/010/829/628/large/steve-jung-knights-sj-low.jpg?1526447238", "https://cdnb.artstation.com/p/assets/images/images/002/213/207/large/_-dofresh-_-notavalon-def-halfsize.jpg?1458914308", "https://cdna.artstation.com/p/assets/images/images/013/011/240/large/antony-carlyon-blank-square.jpg?1537630464", "https://cdna.artstation.com/p/assets/images/images/007/853/612/large/stefan-kopinski-crusader1.jpg?1508939797", "https://cdna.artstation.com/p/assets/images/images/007/023/742/large/stefan-kopinski-lion-heart.jpg?1503095855"]
    shuffleArray() {
        // creates a copy of the current characters array to modify it by value, and not by reference
        const newArr = imgArray.slice();
        // will store the shuffled array
        const shuffleArr = [];
        // each loop through an index gets spliced from newArr, reducing its length
        // gets a random index based off the current length of newArr
        // splices the value from newArr, and pushes it to shuffleArr
        while (newArr.length > 0) {
            shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
        }
        return shuffleArr;
    }
    shuffle() {
        array = imgArray
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    render() {
        const state = this.state;
        return (
            <div>
                <Navbar
                    score={state.score}
                    highScore={state.highScore}
                    navMessage={state.navMessage}
                />
                <Banner />
                <Container
                    shake={state.shake}
                    characters={state.allImages}
                    clickEvent={this.clickEvent}
                />
                <Footer />
            </div>
        )
    }
}


export default ClickyGame;