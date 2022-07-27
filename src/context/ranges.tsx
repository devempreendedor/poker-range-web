import api from '../config/api';
import * as React from 'react';
import { Range } from '../types/range';

type Props = {
    children: React.ReactNode
}

type TypeRangeContext = {
    ranges: Range[]
    listRanges(folderId: string): void
    loading: boolean
}

const RangeContext = React.createContext({} as TypeRangeContext)

export const RangeProvider = ({ children}: Props) => {
    
    const [ranges, setRanges] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    
    async function listRanges(folderId: string) {
        setLoading(true)
        const params = { folderId }

        const response = await api.get(`/ranges`, { params })
        setRanges(response.data)
        setLoading(false)
    }

    return (
        <RangeContext.Provider value={{
            ranges,
            listRanges,
            loading
        }}>
            {children}
        </RangeContext.Provider>
    )
}

export function useRange() {
    return React.useContext(RangeContext)
}

export default RangeContext