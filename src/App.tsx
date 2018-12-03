import * as React from 'react';
import {Parallax, Background} from 'react-parallax';

import './App.css';

import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div style={{height: '1000px'}}>
                    Scroll down......
                </div>
                <div style={{height: '1000px'}}>
                    Keep scrolling down......
                </div>

                <Parallax
                    blur={10}
                    bgImage={logo}
                    bgImageAlt="logo"
                    strength={200}
                >
                    Put some text content here - even an empty div with fixed dimensions to have a height
                    for the parallax.
                    <div style={{height: '100px'}}/>
                </Parallax>

                <div style={{height: '200px'}}/>

                {/* -----dynamic blur-----*/}
                <Parallax
                    blur={{min: -15, max: 15}}
                    bgImage={logo}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    Blur transition from min to max
                    <div style={{height: '200px'}}/>
                </Parallax>

                <div style={{height: '200px'}}/>


                {/* -----custom background element-----*/}
                <Parallax strength={300}>
                    <div>Use the background component for custom elements</div>
                    <div style={{height: '200px'}}/>
                    <Background className="custom-bg">
                        <img src="http://www.fillmurray.com/500/320" alt="fill murray"/>
                    </Background>
                </Parallax>

                <div style={{height: '200px'}}/>


                <div style={{height: '600px'}}>
                    Scroll until the end......
                </div>

                <div style={{height: '200px'}}/>
                <div style={{height: '200px'}}>Thanks</div>
            </div>
        );
    }
}

export default App;
