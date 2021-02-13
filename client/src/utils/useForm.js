import { useState } from 'react';

export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    // passing event de-structured
    function updateValue({ target }) {
        let { value, type, name } = target;
        if (type === 'number') {
            value = parseInt(value)
        }
        setValues({
            // copy existing values
            ...values,
            // update the value that changed
            [name]: value,
        })
    }

    return { values, updateValue }
}