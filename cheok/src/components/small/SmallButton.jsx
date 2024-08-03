const SmallButton = () => {
    const formClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/1hGYaRhEIrJQSvkGCf_oin32WkiQflr8SJdgvps1ytC8/edit';
    };

    return (
        <div
            onClick={formClick}
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                zIndex: 1000,
                position: 'fixed',
                bottom: '20px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    width: '80%',
                    color: 'white',
                    boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#5D71BF',
                    justifyContent: 'center',
                    padding: '8px 0px'
                }}
            >
                사전신청하러 가기
            </div>
        </div>
    );
}

export default SmallButton;
