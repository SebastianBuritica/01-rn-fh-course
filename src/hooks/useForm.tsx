import { useState } from 'react';

// T is a generic type, it can be any type, in this case it is an object
export const useForm = <T extends Object>( formulario: T ) => {
    
    const [state, setState] = useState( formulario );

    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value
        });
    }

    return {
        ...state,
        formulario: state,
        onChange,
    }

}
