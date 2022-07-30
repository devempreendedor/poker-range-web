import * as React from 'react';
import ComboRow from './Row';
import * as constants from "../../utils/constants"

const chunk = (arr: string[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

type Props = {
  viewer?: boolean
}

function ComboMatrix({ viewer }: Props) {
    return (
        <div>
            {chunk(constants.combos, 13).map((row, i) => <ComboRow viewer={viewer} row={row} key={i} />)}

        </div>
    )
}

export default ComboMatrix