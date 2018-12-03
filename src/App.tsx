import * as React from 'react';
import {Parallax, Background} from 'react-parallax';

import './App.css';

import logo from './logo.svg';

function getHeightStyle(height?: number) {
    if (height) {
        return {height: `${height}px`};
    } else {
        return {};
    }
}

const TextDiv = ({height, children}: { height?: number, children?: React.ReactNode }) => (
    <div style={getHeightStyle(height)}>{children}</div>
);

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <TextDiv height={1000}>Scroll down......</TextDiv>
                <TextDiv height={1000}/>
                <TextDiv height={1000}>Keep scrolling down......</TextDiv>

                <Parallax
                    blur={10}
                    bgImage={logo}
                    bgImageAlt="logo"
                    strength={200}
                >
                    Put some text content here - even an empty div with fixed dimensions to have a height
                    for the parallax.
                    <TextDiv height={100}/>
                </Parallax>

                <TextDiv height={200}/>

                {/* -----dynamic blur-----*/}
                <Parallax
                    blur={{min: -15, max: 15}}
                    bgImage={logo}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    Blur transition from min to max
                    <TextDiv height={200}/>
                </Parallax>

                <TextDiv height={200}/>

                {/* -----custom background element-----*/}
                <Parallax strength={300}>
                    <div>Use the background component for custom elements</div>
                    <TextDiv height={200}/>
                    <Background className="custom-bg">
                        <img src="http://www.fillmurray.com/500/320" alt="fill murray"/>
                    </Background>
                </Parallax>

                <TextDiv height={200}/>

                <TextDiv height={600}>Scroll until the end......</TextDiv>

                <TextDiv height={200}/>
                <TextDiv height={200}>Thanks</TextDiv>
            </div>
        );
    }
}

export default App;
