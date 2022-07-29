import * as React from 'react';
import { Color as ColorComponent, PickColor, Wrapper, Close, ColorPickerWrapper, Radio } from './styled';
import { TextField } from "../"
import { RiCloseFill } from "react-icons/ri"
import { BlockPicker } from 'react-color';
import { Color } from "../../types/range"


type ColorSelectProps = {
    color: Color
    handleChangeColor(value: Color): void
    removeColor?(): void
    selected: boolean
    selectColor?(): void
    noClose?: boolean

}

function ColorSelect({ color, handleChangeColor, removeColor, selected, selectColor, noClose }: ColorSelectProps) {
    const [currentColor, setCurrentColor] = React.useState(color || null)
    const [open, setOpen] = React.useState(false)

    function handleChange(description: string, value: string) {
        setCurrentColor(state => ({ ...state, [description]: value }))
    }

    function handleSubmit() {
        handleChangeColor(currentColor)
    }

    function handleColor(value: string) {
        const data = {
            ...currentColor,
            hex: value
        }

        setCurrentColor(data)
        handleChangeColor(data)
        setOpen(false)
    }

    return ( 
        <Wrapper>
            <PickColor>
                <div style={{display: 'flex', alignItems: 'center' }}>
                    <Radio onClick={selectColor} selected={selected}>
                        <div />
                    </Radio>
                </div>
                <div style={{display: 'flex', alignItems: 'center' }}>
                    <ColorComponent onClick={() => setOpen(true)} color={currentColor.hex} />
                </div>
                <TextField value={currentColor.description} onChange={(e) => handleChange('description', e.target.value)} onBlur={handleSubmit} placeholder='Nome' />
            </PickColor>
            {
                !noClose && (
                <Close onClick={removeColor}>
                    <RiCloseFill />
                </Close>
                )
            }
            
            {
                open && (
                    <ColorPickerWrapper>
                        <BlockPicker onChangeComplete={(v) => handleColor(v.hex)} />
                    </ColorPickerWrapper>
                )
            }
        </Wrapper>
     );
}

export default ColorSelect;