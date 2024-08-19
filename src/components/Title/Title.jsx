const Title = ({ text, type }) => {
    return (
        <>
            {type === 'primary' ? <h1>{text}</h1> : type === 'secondary' ? <h2>{text}</h2> : null}
        </>
    );
};

export default Title;