import * as React from 'react';
import { Wrapper } from './styled';

type Props = {
    children: React.ReactNode
    onClick(): void
}

function Button({ children, ...props }: Props) {
    return ( 
        <Wrapper {...props}>
            {children}
        </Wrapper>
     );
}

export default Button;