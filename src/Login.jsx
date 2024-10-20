import React from 'react';
import Form from './components/form';
import bg from '../src/image/homepage.jpg';

const App = () => {
    // Define the background styling here
    const stylingbekgrun = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <Form />
            </div>
            <div 
                style={stylingbekgrun} 
                className="hidden relative lg:flex h-full w-1/2 items-center justify-center" 
                id="bg-img-a"
            >
                {/* Uncomment this if you want to add more elements to the background */}
                {/* <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/> */}
                {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/> */}
            </div>
        </div>
    );
};

export default App;
