import * as React from 'react';
import ComboTile from '../Tile';
import { Row } from './styled';

type ComboRowProps = {
    row: string[]
}

function ComboRow({ row }: ComboRowProps) {
    return ( 
        <Row>
            {row.map((combo, i) => <ComboTile key={i} combo={combo} />)}
        </Row>
        
     );
}

export default ComboRow;