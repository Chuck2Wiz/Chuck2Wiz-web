import {motion} from "framer-motion";
import Spacer from "../Spacer";
import main3 from "../../assets/main3.png";


const SmallThirdBlock = () => {
    return (
        <div style={{
            display: 'flex',
            height: 'auto',
            width: '100%',
            flexDirection: 'column',
            fontSize: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem 0rem',
            backgroundColor: '#F4F6FF'
        }}>
            <motion.div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
                initial={{opacity: 0, y: 20}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 0.1},
                }}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#5D71BF'}}>
                    척척법사가 제공하는 유용한 정보<br/>
                </span>
                <Spacer height={24}/>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                    각 법률 분야마다 척척법사가 제공하는
                </span>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                    질문 형식에 맞춰 최대한 도움이되는 내용을 전달해요.
                </span>
                <Spacer height={12}/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 0.2},
                }}>
                <img
                    style={{
                        height: '600px',
                    }}
                    src={main3}
                    alt="main1"
                />
            </motion.div>
        </div>
    );
}

export default SmallThirdBlock;
