import * as React from 'react';
import { Folder } from '../../types/folder';
import { Wrapper } from './styled';

interface Props {
    folder: Folder
}

function FolderCard({ folder }: Props) {
    return ( 
        <Wrapper>
            <h4>{folder.name}</h4>
        </Wrapper>
     );
}

export default FolderCard;