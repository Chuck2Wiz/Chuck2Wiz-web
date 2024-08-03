import './App.css';
import appLogo from '../src/assets/logo.png'
import FirstBlock from "./components/normal/FirstBlock";
import SecondBlock from "./components/normal/SecondBlock";
import ThirdBlock from "./components/normal/ThirdBlock";
import {useEffect, useState} from "react";
import NormalPage from "./components/normal/NormalPage";
import SmallPage from "./components/small/SmallPage";
import SmallButton from "./components/small/SmallButton";

const App = () => {
    const [isSmall, setIsSmall] = useState(false);
    const handleResize = () => {
        setIsSmall(window.innerWidth <= 1000);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
        }}>
            {!isSmall && <NormalPage />}
            {isSmall && <SmallPage />}
            {isSmall && <SmallButton />}
        </div>
    );
};

export default App;
