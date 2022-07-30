import * as React from 'react';
import { Button, Wrapper } from './styled';
import { MdSave, MdOutlineCleaningServices, MdAddCircleOutline } from "react-icons/md"
import { useRange } from '../../context/ranges';
import { useSearchParams } from 'react-router-dom';

function RangeTopBar() {
    const { clearCombos, setNewRangeModal, updateRange, ranges } = useRange()
    const [searchParams] = useSearchParams();

    const rangeId = searchParams.get('r')

    async function handleUpdate() {
        const range = ranges.find(r => r._id === rangeId)
        await updateRange(range)
    }

    return ( 
        <Wrapper>
            <Button onClick={setNewRangeModal}>
                <MdAddCircleOutline />
                <span>Novo range</span>
            </Button>

            <Button onClick={handleUpdate}>
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