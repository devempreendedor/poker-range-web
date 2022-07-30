/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../config/api';
import * as React from 'react';
import { Color, Range, Combo } from '../types/range';
import { Response } from '../types/api';
import toast from 'react-hot-toast';

type Props = {
    children: React.ReactNode
}

type TypeRangeContext = {
    ranges: Range[]
    colors: Color[]
    loading: boolean
    colorSelected: Color | null
    colorLoading: boolean
    combos: Combo[]
    newRangeModal: boolean
    rangeSelected: Range | null
    listRanges(folderId: string): void
    listColors(rangeId: string): void
    addNewColor(id: string): void
    removeColor(id: string): void
    selectColor(data: Color): void
    addCombo(combo: Combo): void
    clearCombos(): void
    setNewRangeModal(): void
    createRange(o: object): Promise<Response>
    updateRange(range: Range): void
    getRange(id: string): void,
    updateColor(value: Color): void
}

const RangeContext = React.createContext({} as TypeRangeContext)

export const RangeProvider = ({ children }: Props) => {

    const [ranges, setRanges] = React.useState([])
    const [colors, setColors] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [colorSelected, setColorSelected] = React.useState(null)
    const [colorLoading, setColorLoading] = React.useState(false)
    const [combos, setCombos] = React.useState([])
    const [newRangeModal, setNewRangeModal] = React.useState(false)
    const [rangeSelected, setRangeSelected] = React.useState(null)

    async function listRanges(folderId: string) {
        setLoading(true)
        const params = { folderId }

        const response = await api.get(`/ranges`, { params })
        setRanges(response.data)
        setLoading(false)
    }

    async function getRange(rangeId: string) {
        setLoading(true)
        const response = await api.get(`/ranges/${rangeId}`)
        setRangeSelected(response.data)
        setCombos(response.data.combos)
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

    function addCombo(combo: Combo) {
        const arr = [...combos]

        const existCombo = arr.findIndex(a => a.combo === combo.combo)

        if (existCombo !== -1) {
            arr.splice(existCombo, 1)
        } else {
            arr.push(combo)
        }

        setCombos(arr)
    }

    const createRange = async (body: object): Promise<Response> => {
        const response: Response = await api.post(`/ranges`, body)
        return response
    }

    async function updateRange(range: Range) {
        const data = {
            ...range,
            combos
        }

        await api.put(`/ranges/${range._id}`, data)
    }

    async function updateColor(color: Color) {
        const response = await api.put(`/colors/${color._id}`, color)
        if (colorSelected._id === color._id) {
            setColorSelected(color)
        }
        if (response.status === 200) {
            toast.success('Cor atualizada')

            const arr = combos.map((row) => {
                if (row.color._id === color._id) {
                    return ({
                        ...row,
                        color
                    })
                } 
                return row
            })
            setCombos(arr)
        }
        return response
    }

    return (
        <RangeContext.Provider value={{
            ranges,
            loading,
            colors,
            colorSelected,
            colorLoading,
            combos,
            newRangeModal,
            rangeSelected,
            addNewColor,
            listColors,
            listRanges,
            removeColor,
            selectColor: (data: Color) => setColorSelected(data),
            addCombo,
            clearCombos: () => setCombos([]),
            setNewRangeModal: () => setNewRangeModal(!newRangeModal),
            createRange,
            updateRange,
            getRange,
            updateColor
            
        }}>
            {children}
        </RangeContext.Provider>
    )
}

export function useRange() {
    return React.useContext(RangeContext)
}

export default RangeContext