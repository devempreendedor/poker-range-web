export interface Hand {
    combo: string
    color: string | Color
}

export interface Range {
    _id: string
    name: string
    position: string
    folderId: string
}

export interface RangeByPosition {
    position: string
    ranges: Range[]
}


export interface Color {
    hex: string
    _id: string
    description?: string
    rangeId: string
}

export interface Combo {
    combo: string
    color: Color
}