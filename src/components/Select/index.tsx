import * as React from 'react';
import { Wrapper, Select, Options, Option, Label } from "./styled"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

type Option = {
    label: string
    value: string | number | object
}

type Props = {
    options: Option[]
    onChange(value: string | number | object): void
    label?: string
}

function SelectComponent({ options, onChange, label }: Props) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<Option | null>(null)

    function handleChange(value: Option) {
        setValue(value)
        onChange(value.value)
        setOpen(false)
    }

    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <Select open={open} onClick={() => setOpen(!open)}>
                <span>{value ? value.label : "Escolha uma opção"}</span>
                {
                    open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
            </Select>
            <Options open={open}>
                {options.map((option, index) => (
                    <Option onClick={() => handleChange(option)} key={index}>{option.label}</Option>
                ))}
            </Options>
        </Wrapper>
    )
}

export default SelectComponent