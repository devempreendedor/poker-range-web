import { useRange } from '../../context/ranges';
import * as React from 'react';
import { Bar, Link } from './styled';
import ColorSelect from '../ColorSelect';
import { HiOutlinePlusCircle } from "react-icons/hi"
import { useSearchParams } from 'react-router-dom';
import { Color } from '../../types/range';

function PropertiesBar() {
    const { colors, colorSelected, addNewColor, colorLoading, removeColor, selectColor, updateColor } = useRange()
    const [searchParams] = useSearchParams();

    async function handleUpdatecolor(color: Color) {
        await updateColor(color)
    }

    return (
        <Bar>
            <h4>Propriedades</h4>
            <div style={{ marginTop: 20 }}>
                {
                    colors.map((color) => (
                        <ColorSelect 
                            key={color._id}
                            noClose={colors.length === 1} 
                            selectColor={() => selectColor(color)} 
                            removeColor={() => removeColor(color._id)} 
                            selected={colorSelected?._id === color._id}
                            handleChangeColor={(value: Color) => handleUpdatecolor(value)} 
                            color={color}
                        />
                    ))
                }
                <div style={{ marginTop: 20 }}>
                    {
                        colorLoading ? <div>Carregando</div> : 
                        <Link onClick={() => addNewColor(searchParams.get('r'))}>
                            <HiOutlinePlusCircle />
                            <span>Nova cor</span>
                        </Link>
                    }
                </div>
            </div>
        </Bar>
    );
}

export default PropertiesBar;