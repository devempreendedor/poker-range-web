import { Range, RangeByPosition } from "../types/range"

export const typeGames = [
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

export function organizeRangeByPosition (values: Range[]) {
    const data: RangeByPosition[] = []

    values.map((range) => {
        data.push({
            position: range.position,
            ranges: values.filter(v => v.position === range.position)
        })
    })

    return data
}