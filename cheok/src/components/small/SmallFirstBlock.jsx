import {motion} from "framer-motion";
import main1 from "../../assets/main1.png";

const SmallFirstBlock = () => {
    return (
        <div style={{
            display: 'flex',
            height: 'auto',
            flexDirection: 'column',
            fontSize: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F4F6FF'
        }}>
            <motion.div
                style={{
                    display: 'flex',
                    padding: '3rem 0rem',
                    fontSize: '1.35rem',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
                initial={{opacity: 0, y: 20}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 0.2},
                }}
            >
                복잡한 법률상담 이제는 AI가 도와드립니다
                <div>
                    <span style={{fontWeight: 'bold'}}>척척법사</span>와 함께
                    <span style={{fontWeight: 'bold', color: '#5D71BF'}}> 간편하게 해결</span>하세요!
                </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 0.35},
                }}>
                <img
                    style={{
                        height: '350px',
                    }}
                    src={main1}
                    alt="main1"
                />
            </motion.div>
        </div>
    );
}

export default SmallFirstBlock;
