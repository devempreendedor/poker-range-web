import * as React from 'react';
import { Modal, TextField } from "../../";

interface Props {
    open: boolean
    onClose(): void
}

function CreateFolderModal({ open, onClose }: Props) {
    return ( 
        <Modal open={open} onClose={onClose}>
            <TextField label="Nome" placeholder='Nome da pasta' />
        </Modal>
     );
}

export default CreateFolderModal;