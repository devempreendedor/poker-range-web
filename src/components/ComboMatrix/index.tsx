import * as React from 'react';
import ComboRow from './Row';
import * as constants from "../../utils/constants"

const chunk = (arr: string[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


function ComboMatrix() {
    return (
        <div>
            {chunk(constants.combos, 13).map((row, i) => <ComboRow row={row} key={i} />)}

        </div>
    )
}

export default ComboMatrix