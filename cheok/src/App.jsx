import './App.css';
import appLogo from '../src/assets/logo.png'
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";

const App = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
        }}>
            <img
                style={{
                    width: '100px',
                    height: 'auto',
                    padding: '1rem 3rem'
                }}
                src={appLogo}
                alt="appLogo"
            />
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock />
        </div>
    );
};

export default App;
