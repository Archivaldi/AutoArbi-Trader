import { useState } from 'react';

export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    // passing event de-structured
    function updateValue({ target }) {
        let { value, name } = target;

        setValues({
            // copy existing values
            ...values,
            // update the value that changed
            [name]: value,
        })
    }

    return { values, updateValue }
}