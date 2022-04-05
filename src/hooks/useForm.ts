import { ChangeEvent, useState } from 'react';

export function useForm<T>(initialState: T): [T, ({target}: React.ChangeEvent<HTMLInputElement>) => void, (reset: T) => void]  {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const reset = () => {
        setValues(initialState);
    }

    return [values, handleInputChange, reset];
}