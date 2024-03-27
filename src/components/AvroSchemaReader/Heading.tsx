import './Heading.css';

const Heading: React.FC<{ heading: string }> = ({ heading }) => {
    return (
        <>
            <h3>{heading}</h3>
            <div className='heading'>
                <div className='heading-name'>Columns</div>
                <div className='heading-masked'>Masked ?</div>
                <div className='heading-encrypted'> Encrypted ?</div>
            </div>
        </>
    );
};

export default Heading;
