import { useRange } from '../../context/ranges';
import * as React from 'react';
import { Bar, Link } from './styled';
import ColorSelect from '../ColorSelect';
import { HiOutlinePlusCircle } from "react-icons/hi"
import { useParams } from 'react-router-dom';

function PropertiesBar() {
    const { colors, colorSelected, addNewColor, colorLoading, removeColor, selectColor } = useRange()

    const params = useParams()

    return (
        <Bar>
            <h4>Propriedades</h4>
            <div style={{ marginTop: 20 }}>
                {
                    colors.map((color) => (
                        <ColorSelect noClose={colors.length === 0} key={color._id} selectColor={() => selectColor(color)} removeColor={() => removeColor(color._id)} selected={colorSelected._id === color._id} handleChangeColor={() => { }} color={color} />
                    ))
                }
                <div style={{ marginTop: 20 }}>
                    {
                        colorLoading ? <div>Carregando</div> : 
                        <Link onClick={() => addNewColor(params.id)}>
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