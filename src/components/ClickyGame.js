import React, { Component } from 'react';
import Navbar from './Navbar';
/*import Container from './Container';*/
import Wrapper from './Wrapper';
import Footer from './Footer';
import Banner from './Banner';
import Card from "./Card";
import cards from '../images/images.json';

// Main App
class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        cards,
        navMessage: 'Click an image to begin!',
        shake: false
    }
    //imgArray = ["https://cdna.artstation.com/p/assets/images/images/017/732/628/large/even-amundsen-2da23d94-7e10-4295-9223-969af0b4d265.jpg?1557149418", "https://cdnb.artstation.com/p/assets/images/images/004/239/951/large/manuel-castanon-knight-girl-high-resolution.jpg?1562781751", "https://cdna.artstation.com/p/assets/images/images/006/606/388/large/zudarts-lee-170601-01.jpg?1499878487", "https://cdna.artstation.com/p/assets/images/images/013/225/918/large/frederic-arsenault-full-beauty-name.jpg?1538637573", "https://cdna.artstation.com/p/assets/images/images/013/421/986/large/jaromir-hrivnac-20181005-sp5ii.jpg?1539543619", "https://cdna.artstation.com/p/assets/images/images/006/623/886/large/jonah-booth-remmers-knight.jpg?1500015016", "https://cdnb.artstation.com/p/assets/images/images/004/736/527/large/grzegorz-rutkowski-knight-study-4-1200.jpg?1485890644", "https://cdna.artstation.com/p/assets/images/images/010/829/628/large/steve-jung-knights-sj-low.jpg?1526447238", "https://cdnb.artstation.com/p/assets/images/images/002/213/207/large/_-dofresh-_-notavalon-def-halfsize.jpg?1458914308", "https://cdna.artstation.com/p/assets/images/images/013/011/240/large/antony-carlyon-blank-square.jpg?1537630464", "https://cdna.artstation.com/p/assets/images/images/007/853/612/large/stefan-kopinski-crusader1.jpg?1508939797", "https://cdna.artstation.com/p/assets/images/images/007/023/742/large/stefan-kopinski-lion-heart.jpg?1503095855"]
    //imgArray = images

    shuffle() {
        const array = cards.slice();
        //let newArray = shuffle(newArr)

        //var array = imgArray
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


    gameOver = () => {
        if (this.state.score > this.state.highScore) {
          this.setState({highScore: this.state.score}, function() {
            console.log(this.state.highScore);
          });
        }
        this.state.cards.forEach(card => {
          card.count = 0;
        });
        alert(`Game Over :( \nscore: ${this.state.score}`);
        this.setState({score: 0});
        return true;
      }
    
      clickCount = id => {
        this.state.cards.find((o, i) => {
          if (o.id === id) {
            if(cards[i].count === 0){
              cards[i].count = cards[i].count + 1;
              this.setState({score : this.state.score + 1}, function(){
                console.log(this.state.score);
              });
              this.state.cards.sort(() => Math.random() - 0.5)
              return true; 
            } else {
              this.gameOver();
            }
          }
        });
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
                <Wrapper>
                {this.state.cards.map(card => (
                    <Card
                        clickCount={this.clickCount}
                        id={card.id}
                        key={card.id}
                        image={card.image}
                    />
                ))}
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

/*
                <Container
                    shake={state.shake}
                    characters={state.allImages}
                    clickEvent={this.clickEvent}
                />
*/

export default ClickyGame;