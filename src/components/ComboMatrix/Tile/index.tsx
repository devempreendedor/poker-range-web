import * as React from 'react';
import { Combo, Content } from './styled';

type ComboTileProps = {
    combo: string
}

function ComboTile({ combo }: ComboTileProps) {
    return (
        <Combo>
            <Content>
                {combo}
            </Content>
        </Combo>
    );
}

export default ComboTile;