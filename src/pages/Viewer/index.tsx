import { ComboMatrix, Container, Layout } from '../../components';
import * as React from 'react';
import { ButtonPosition, ButtonRange, Color, Content, Positions, Squad, Subtitle } from './styled';
import { useParams } from 'react-router-dom';
import { useRange } from '../../context/ranges';
import { organizeRangeByPosition } from '../../utils';
import { Range, RangeByPosition } from '../../types/range';

function Viewer() {

    const params = useParams()

    const {listRanges, ranges, setRangeSelected, rangeSelected, colors, listColors } = useRange()
    const [position, setPosition] = React.useState("")
    const [rangeByPosition, setRangesByPosition] = React.useState([])

    React.useEffect(() => {
        listRanges(params.id)
    }, [])

    React.useEffect(() => {
        if (rangeSelected) {
            listColors(rangeSelected._id)
        }
    }, [rangeSelected])

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
                        <Subtitle>
                            {
                                colors.map((color) => (
                                    <Color>
                                        <Squad color={color.hex} />
                                        <span>{color.description}</span>
                                    </Color>
                                ))
                            }
                        </Subtitle>
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