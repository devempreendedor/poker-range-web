import { ComboMatrix, Container, Layout } from '../../components';
import * as React from 'react';
import { Content } from './styled';

function Viewer() {
    return ( 
        <Layout>
            <Container>
                <Content>
                    <ComboMatrix />
                </Content>
            </Container>
        </Layout>
     );
}

export default Viewer;