import {motion} from "framer-motion";
import main3 from "../../assets/main3.png";
import Spacer from "../Spacer";

const  ThirdBlock = () => {
    return (
        <div style={{
            display: 'flex',
            height: '750px',
            width: '100%',
            flexDirection: 'row',
            fontSize: '3rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F4F6FF'
        }}>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 0.1},
                }}>
                <span style={{fontSize: '3rem', fontWeight: 'bold', color: '#5D71BF'}}>
                    척척법사가 제공하는 <br/>
                    유용한 정보 <br/>
                </span>
                <Spacer height={36}/>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                    각 법률 분야마다 척척법사가 제공하는
                </span>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                    질문 형식에 맞춰 최대한 도움이되는 내용을 전달해요.
                </span>
                <Spacer height={100}/>
            </motion.div>
            <Spacer width={100}/>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 0.2},
                }}>
                <img
                    style={{
                        height: '500px',
                    }}
                    src={main3}
                    alt="main1"
                />
            </motion.div>
        </div>
    );
}

export default ThirdBlock;
