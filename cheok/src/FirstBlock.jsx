import Spacer from "./Spacer";
import main1 from "./assets/main1.png";
import {motion} from "framer-motion";

const FirstBlock = () => {
    const formClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/1hGYaRhEIrJQSvkGCf_oin32WkiQflr8SJdgvps1ytC8/edit';
    };

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
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '5rem 3rem',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 },
                }}
            >
                <div style={{
                }}>
                    복잡한 법률상담<br/>
                    이제는 AI가 도와드립니다 <br/>
                    <span style={{fontWeight: 'bold'}}>척척법사</span>와 함께<br/>
                    <span style={{fontWeight: 'bold', color: '#5D71BF'}}>간편하게 해결</span>
                    하세요!
                </div>
                <div style={{
                    width: '400px',
                    padding: '2rem 0rem'
                }}>
                    <div style={{
                        display: 'flex',
                        fontSize: '14px',
                        color: '#7B7B7B',
                        justifyContent: 'center'
                    }}>
                        지금 신청해보세요!
                    </div>
                    <Spacer height="4px"/>
                    <div onClick={formClick} style={{
                        display: 'flex',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        backgroundColor: '#5D71BF',
                        padding: '8px 0',
                        color: 'white'
                    }}>
                        사전신청하러 가기
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.35 },
                }}>
                <img
                    style={{
                        height: '600px',
                    }}
                    src={main1}
                    alt="main1"
                />
            </motion.div>
        </div>
    )
}

export default FirstBlock;
