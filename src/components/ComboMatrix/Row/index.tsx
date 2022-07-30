import * as React from 'react';
import ComboTile from '../Tile';
import { Row } from './styled';

type ComboRowProps = {
    row: string[]
    viewer?: boolean
}

function ComboRow({ row, viewer }: ComboRowProps) {

    return ( 
        <Row>
            {row.map((combo, i) => <ComboTile viewer={viewer} key={i} combo={combo} />)}
        </Row>
        
     );
}

export default ComboRow;