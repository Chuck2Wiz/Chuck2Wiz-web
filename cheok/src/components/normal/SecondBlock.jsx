import main2 from "../../assets/main2.png";
import {motion} from "framer-motion";
import Spacer from "../Spacer";

const SecondBlock = () => {
    return (
        <div style={{
            display: 'flex',
            height: '750px',
            width: '100%',
            flexDirection: 'row',
            fontSize: '3rem',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 },
                }}>
                <img
                    style={{
                        height: '500px',
                    }}
                    src={main2}
                    alt="main1"
                />
            </motion.div>
            <Spacer width={100} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 },
                }}>
                <span style={{fontSize: '3rem', fontWeight: 'bold', color: '#5D71BF'}}>
                    대법원 주요판례문 기반 <br/>
                    AI 학습모델 <br/>
                </span>
                <Spacer height={24} />
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                법률적 지식이 없어도 걱정 마세요.
            </span>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem' // 문단 간격 조절
                }}>
                대법원 판례문을 학습한 AI가
            </span>
                <span style={{
                    display: 'block',
                    color: '#626262',
                    fontSize: '1.5rem',
                }}>
                여러분의 상황에 맞춘 법률 상담을 제공합니다.
            </span>
                <Spacer height={100} />
            </motion.div>
        </div>
    );
}

export default SecondBlock;
