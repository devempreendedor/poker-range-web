import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { InputStyle, Label } from "./styled"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...otherProps }, ref) => {
    return (

        <>
            {label && <Label>{label}</Label>}
            <InputStyle
                {...otherProps}
                name={name}
                ref={ref} />
        </>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;
