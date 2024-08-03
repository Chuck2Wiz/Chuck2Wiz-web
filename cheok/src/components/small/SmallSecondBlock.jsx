import {motion} from "framer-motion";
import main2 from "../../assets/main2.png";
import Spacer from "../Spacer";

const SmallSecondBlock = () => {
    return (
        <div style={{
            display: 'flex',
            height: 'auto',
            flexDirection: 'column',
            fontSize: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem 0rem',
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
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#5D71BF'}}>
                    대법원 주요판례문 기반 AI 학습모델<br/>
                </span>
                <Spacer height={24}/>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '0.75rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                    법률적 지식이 없어도 걱정 마세요.
                </span>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '0.75rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                    대법원 판례문을 학습한 AI가 여러분의 상황에 맞춘 법률 상담을 제공합니다.
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
                        height: '350px',
                    }}
                    src={main2}
                    alt="main1"
                />
            </motion.div>
            <Spacer width={100}/>

        </div>
    );
}

export default SmallSecondBlock;
