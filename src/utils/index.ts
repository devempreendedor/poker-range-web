import { Range, RangeByPosition } from "../types/range"

export const typeGame = [
    {
        label: "Cashgame",
        value: "CASHGAME"
    },
    {
        label: "Torneio",
        value: "TOURNAMENT"
    }
]

export const formats = [
    {
        label: "6 Max",
        value: "6MAX"
    },
    {
        label: "9 Max",
        value: "9MAX"
    }
]


export const stacks = [
    {
        label: "100 BB",
        value: "100BB"
    },
    {
        label: "50 BB",
        value: "50BB"
    }
]

export function organizeRangeByPosition(values: Range[]) {
    const data: RangeByPosition[] = []

    values.map((range) => {

        const existPosition = data.findIndex(r => r.position === range.position)

        if (existPosition === -1) {
            data.push({
                position: range.position,
                ranges: values.filter(v => v.position === range.position)
            })
        }


    })

    return data
}