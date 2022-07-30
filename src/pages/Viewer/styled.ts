import styled from "styled-components"

type Props = {
    selected?: boolean
}

export const Content = styled.div`
    display: flex;
`

export const Positions = styled.div`
    display: flex;
`

export const ButtonPosition = styled.div`
    background-color: #71788b;
    color: #fff;
    width: 88px;
    height: 34px;
    line-height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;

    ${({ selected }: Props) => selected && `
            border: 1px solid #71788b!important;
            color: #71788b!important;
            background: transparent;
    `}
`

export const ButtonRange = styled.div`
    color: #aaa;
    min-width: 88px;
    height: 34px;
    line-height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    font-size: 0.8rem;
    padding: 0 10px;

    ${({ selected }: Props) => selected && `
        color: #65bd77;!important;
    `}
`

export const Subtitle = styled.div`
    display: flex;
    padding: 20px 0;
`

export const Color = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;

    span {
        font-size: 0.8rem;
    }
`

export const Squad = styled.div`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    background-color: ${props => props.color};
`