import api from '../config/api';
import * as React from 'react';
import { Color, Range } from '../types/range';

type Props = {
    children: React.ReactNode
}

type TypeRangeContext = {
    ranges: Range[]
    listRanges(folderId: string): void
    listColors(rangeId: string): void
    colors: Color[]
    loading: boolean
    colorSelected: Color | null
    addNewColor(id: string): void
    colorLoading: boolean
    removeColor(id: string): void
    selectColor(data: Color): void
}

const RangeContext = React.createContext({} as TypeRangeContext)

export const RangeProvider = ({ children }: Props) => {

    const [ranges, setRanges] = React.useState([])
    const [colors, setColors] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [colorSelected, setColorSelected] = React.useState(null)
    const [colorLoading, setColorLoading] = React.useState(false)

    async function listRanges(folderId: string) {
        setLoading(true)
        const params = { folderId }

        const response = await api.get(`/ranges`, { params })
        setRanges(response.data)
        setLoading(false)
    }

    async function listColors(rangeId: string) {
        const params = { rangeId }
        const response = await api.get(`/colors`, { params })
        setColors(response.data)
        setColorSelected(response.data[0])
    }

    async function addNewColor(rangeId: string) {
        setColorLoading(true)
        const body = {
            rangeId,
            hex: "#10B981"
        }
        const response = await api.post(`/colors`, body)
        const arr = [...colors]
        arr.push(response.data)
        setColors(arr)
        setColorLoading(false)
    }

    async function removeColor(colorId: string) {
        setColorLoading(true)
        const response = await api.delete(`/colors/${colorId}`,)
        if (response.status === 200) {
            const arr = [...colors]

            const idx = arr.findIndex(a => a._id === colorId)
            arr.splice(idx, 1)
            setColors(arr)

            if (colorSelected._id === colorId) {
                setColorSelected(arr[0])
            }

        }
        setColorLoading(false)
    }

    return (
        <RangeContext.Provider value={{
            ranges,
            listRanges,
            loading,
            listColors,
            colors,
            colorSelected,
            addNewColor,
            colorLoading,
            removeColor,
            selectColor: (data: Color) => setColorSelected(data)
        }}>
            {children}
        </RangeContext.Provider>
    )
}

export function useRange() {
    return React.useContext(RangeContext)
}

export default RangeContext