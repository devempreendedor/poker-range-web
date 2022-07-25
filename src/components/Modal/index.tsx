import * as React from 'react';
import { Content, ModalWrapper, Close } from "./styled"
import { MdClose } from "react-icons/md"
import { ReactNode } from "react"

interface ModalProps {
    open: boolean
    onClose(): void
    children: ReactNode
}

const Modal = ({ open, onClose, children }: ModalProps) => {
    return (
        <ModalWrapper open={open}>
            <Content>
                <Close onClick={onClose}>
                    <MdClose />
                </Close>
                {children}
            </Content>
        </ModalWrapper>
    )
}

export default Modal