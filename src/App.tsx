import { routes } from './routes';
import { useRoutes } from 'react-router-dom';
import AvroSchemaReader from './components/AvroSchemaReader';
import data from './data';
import { useState, createContext } from 'react';

export const DataContextProvider = createContext({} as any);

function App() {
    const element = useRoutes(routes);

    const [masked, setMasked] = useState([]);
    const [encrypted, setEncrypted] = useState([]);

    return (
        <div>
            <h3>Select Columns for masking and encryption :</h3>
            <DataContextProvider.Provider value={{ masked, setMasked, encrypted, setEncrypted }}>
                <AvroSchemaReader data={data} />
            </DataContextProvider.Provider>
            <div>
                <h3>Output</h3>

                <h4>You have selected columns for masking: </h4>
                <ul>
                    {masked.map((val) => (
                        <li>{val}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>You have selected columns for encryption </h4>
                <ul>
                    {encrypted.map((val) => (
                        <li>{val}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
