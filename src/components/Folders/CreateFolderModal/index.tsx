import * as React from 'react';
import { Modal, TextField, Select, FormGroup, Button } from "../../";
import { formats, typeGames } from "../../../utils"

interface Props {
    open: boolean
    onClose(): void
}

function CreateFolderModal({ open, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose}>
            <FormGroup>
                <TextField label="Nome" placeholder='Nome da pasta' />
            </FormGroup>
            <FormGroup>
                <Select onChange={() => { }} label='Tipo de Jogo' options={typeGames} />
            </FormGroup>
            <FormGroup>
                <Select onChange={() => { }} label='Formato' options={formats} />
            </FormGroup>
            <div style={{ marginTop: 40 }}>
                <Button>
                    Criar
                </Button>
            </div>
        </Modal>
    );
}

export default CreateFolderModal;