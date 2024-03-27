import Field from '../Field';
import Heading from './Heading';

const AvroSchemaReader: React.FC<{ data: any }> = ({ data }) => {
    return (
        <>
            {data?.type === 'record' && <Heading heading={data?.name} />}
            {typeof data.type === 'object' && <Heading heading={data?.name} />}
            {data?.fields?.map((field: any) => {
                return (
                    <>
                        {field.type === 'record' && <AvroSchemaReader data={field} />}
                        {typeof field.type === 'object' && <AvroSchemaReader data={field.type} />}
                        {field.type !== 'record' && (
                            <Field key={`${data.name}.${field.name}`} propertyName={`${data.name}.${field.name}`} />
                        )}
                    </>
                );
            })}
        </>
    );
};

export default AvroSchemaReader;
