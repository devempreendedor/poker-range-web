import * as React from 'react';
import { Modal, TextField, Select, FormGroup, Button } from "../../";
import { formats, typeGames } from "../../../utils"
import { useFolder } from '../../../context/folder';

function CreateFolderModal() {

    const { folderModal, setFolderModal, createFolder } = useFolder()

    const [values, setValues] = React.useState({
        name: "",
        typeGames: "",
        format: ""
    })

    function handleChange(name: string, value: string | number | object) {
        setValues((state) => ({ ...state, [name]: value }))
    }

    function handleSubmit() {
        createFolder(values)
    }

    return (
        <Modal open={folderModal} onClose={setFolderModal}>
            <FormGroup>
                <TextField onChange={(e) => handleChange("name", e.target.value)} label="Nome" placeholder='Nome da pasta' />
            </FormGroup>
            <FormGroup>
                <Select  onChange={(v) => handleChange("typeGames", v)} label='Tipo de Jogo' options={typeGames} />
            </FormGroup>
            <FormGroup>
                <Select  onChange={(v) => handleChange("format", v)} label='Formato' options={formats} />
            </FormGroup>
            <div style={{ marginTop: 40 }}>
                <Button onClick={handleSubmit}>
                    Criar
                </Button>
            </div>
        </Modal>
    );
}

export default CreateFolderModal;