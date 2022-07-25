import * as React from 'react';
import { Wrapper } from './styled';

type Props = {
    children: React.ReactNode
}

function Button({ children }: Props) {
    return ( 
        <Wrapper>
            {children}
        </Wrapper>
     );
}

export default Button;