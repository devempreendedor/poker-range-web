import { useRange } from '../../../context/ranges';
import * as React from 'react';
import { Combo, Content } from './styled';

type ComboTileProps = {
    combo: string
}

function ComboTile({ combo }: ComboTileProps) {
    const { combos, addCombo, colorSelected } = useRange()

    function handleCombo() {
        addCombo({
            combo,
            color: colorSelected
        })
    }

    function whatColor() {
        const existColor = combos.find(c => c.combo === combo)
        return existColor ? existColor.color.hex : ""
    }
    
    return (
        <Combo color={whatColor()} onClick={handleCombo}>
            <Content>
                {combo}
            </Content>
        </Combo>
    );
}

export default ComboTile;