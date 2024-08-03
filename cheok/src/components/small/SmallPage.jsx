import appLogo from "../../assets/logo.png";
import SmallFirstBlock from "./SmallFirstBlock";
import SmallSecondBlock from "./SmallSecondBlock";
import SmallThirdBlock from "./SmallThirdBlock";

const SmallPage = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img
                    style={{
                        width: '100px',
                        height: 'auto',
                        padding: '1rem 0rem',
                    }}
                    src={appLogo}
                    alt="appLogo"
                />
            </div>
            <SmallFirstBlock />
            <SmallSecondBlock />
            <SmallThirdBlock />
        </div>
    );
}

export default SmallPage;
