import { ComboMatrix, Container, Layout } from '../../components';
import * as React from 'react';
import { ButtonPosition, ButtonRange, Content, Positions } from './styled';
import { useParams } from 'react-router-dom';
import { useRange } from '../../context/ranges';
import { organizeRangeByPosition } from '../../utils';
import { Range, RangeByPosition } from '../../types/range';

function Viewer() {

    const params = useParams()

    const {listRanges, ranges, setRangeSelected, rangeSelected } = useRange()
    const [position, setPosition] = React.useState("")
    const [rangeByPosition, setRangesByPosition] = React.useState([])

    React.useEffect(() => {
        listRanges(params.id)
    }, [])

    function handlePosition(range: RangeByPosition) {
        setRangesByPosition(range.ranges)
        setPosition(range.position)
        setRangeSelected(null)
    }

    return ( 
        <Layout>
            <Container>
                <Content>
                    <div>
                        <ComboMatrix viewer />
                    </div>
                    <div style={{ marginLeft: 20 }}>
                        <Positions>
                            {
                                organizeRangeByPosition(ranges).map((range, i) => (
                                    <ButtonPosition onClick={() => handlePosition(range)} key={i} selected={position === range.position}>
                                        {range.position}
                                    </ButtonPosition>
                                ))
                            }
                        </Positions>
                        <Positions style={{ paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                            {
                                rangeByPosition.map((range: Range, i) => (
                                    <ButtonRange selected={range._id === rangeSelected?._id} onClick={() => setRangeSelected(range)} key={i}>
                                        {range.name}
                                    </ButtonRange>
                                ))
                            }
                        </Positions>
                    </div>
                </Content>
            </Container>
        </Layout>
     );
}

export default Viewer;