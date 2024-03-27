import { useContext, useState } from 'react';
import './index.css';
import { DataContextProvider } from '../../App';

interface FieldProps {
    propertyName: string;
}

const Field: React.FC<FieldProps> = ({ propertyName }) => {
    const [isMasked, setIsMarked] = useState(false);
    const [isEncrypted, setIsEncrypted] = useState(false);
    const { masked, setMasked, encrypted, setEncrypted } = useContext(DataContextProvider);

    const displayName = propertyName.split('.');

    const onchangeMasked = () => {
        setIsMarked(!isMasked);
        if (!isMasked === true) setMasked([...masked, propertyName]);
        else setMasked(masked.filter((name: string) => name !== propertyName));
    };

    const onchangeEncrypted = () => {
        setIsEncrypted(!isEncrypted);
        if (!isEncrypted === true) setEncrypted([...encrypted, propertyName]);
        else setEncrypted(encrypted.filter((name: string) => name !== propertyName));
    };

    return (
        <div className='field'>
            <div className='field-name'>{displayName[displayName.length - 1]}</div>
            <div className='field-isMasked'>
                <input type='checkbox' onChange={onchangeMasked}></input>
            </div>
            <div className='field-isEncrypted'>
                <input type='checkbox' onChange={onchangeEncrypted}></input>
            </div>
        </div>
    );
};

export default Field;
