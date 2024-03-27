import Counter from '../Counter';

interface Component1Props {
    prop1: string;
}

const Component1: React.FC<Component1Props> = ({ prop1 }) => {
    return (
        <>
            <p>Component1</p>
            <Counter />
        </>
    );
};

export default Component1;
