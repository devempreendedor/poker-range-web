import styled from "styled-components"

type Props = {
    selected: boolean
}

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    margin-bottom: 10px;
`

export const PickColor = styled.div`
    display: flex;
    align-items: center;
`

export const Color = styled.div`
    display: flex;
    background-color: ${({ color }) => color};
    height: 40px;
    width: 40px;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 20px;
`

export const Close = styled.div`
    cursor: pointer;

    svg {
        font-size: 1.2rem;
    }
`

export const ColorPickerWrapper = styled.div`
    position: absolute;
    bottom: -150px;
    left: 50px;
    z-index: 999;
    background-color: #fff;
`


export const Radio = styled("h2")<Props>`
    width: 20px;
     height: 20px;
     border: 1px solid;
     margin-right: 10px;
     border-radius: 50%;
     cursor: pointer;

      ${({ selected}) => selected && `
         border-color: #65bd77;
         display: flex;
         align-items: center;
         justify-content: center;
     
         div {
             width: 15px;
             height: 15px;
             border-radius: 50%;
             background-color: #65bd77;
         }
      `}
`;
