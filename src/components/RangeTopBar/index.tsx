import * as React from 'react';
import { Button, Wrapper } from './styled';
import { MdSave, MdOutlineCleaningServices } from "react-icons/md"
import { useRange } from '../../context/ranges';

function RangeTopBar() {
    const { clearCombos } = useRange()

    return ( 
        <Wrapper>
            <Button>
                <MdSave />
                <span>Atualizar range</span>
            </Button>


            <Button onClick={clearCombos}>
                <MdOutlineCleaningServices />
                <span>Limpar range</span>
            </Button>
        </Wrapper>
     );
}

export default RangeTopBar;