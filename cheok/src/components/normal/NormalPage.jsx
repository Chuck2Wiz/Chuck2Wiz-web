import appLogo from "../../assets/logo.png";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";

const NormalPage = () => {
    return (
        <div>
            <img
                style={{
                    width: '100px',
                    height: 'auto',
                    padding: '1rem 3rem'
                }}
                src={appLogo}
                alt="appLogo"
            />
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
        </div>
    );
}

export default NormalPage;
