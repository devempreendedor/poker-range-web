import * as React from 'react';
import { Modal, TextField, Select, FormGroup, Button } from "../../";
import { formats, typeGame, stacks } from "../../../utils"
import { useFolder } from '../../../context/folder';
import { useNavigate } from 'react-router-dom';

function CreateFolderModal() {

    const { folderModal, setFolderModal, createFolder, folderLoading } = useFolder()
    const navigate = useNavigate()

    const [values, setValues] = React.useState({
        name: "",
        typeGame: "",
        format: "",
        stacks: ""
    })

    function handleChange(name: string, value: string | number | object) {
        setValues((state) => ({ ...state, [name]: value }))
    }

    async function handleSubmit() {
        try {
            const response = await createFolder(values)
            if (response.status === 201) {
                const folderId: string = response.data._id
                setFolderModal()
                navigate(`/folders/${folderId}`)
            }
        } catch (error) {
            console.log("#### Error =>", error)
        }
    }

    return (
        <Modal open={folderModal} onClose={setFolderModal}>
            <FormGroup>
                <h1>Criar pasta</h1>
            </FormGroup>
            <FormGroup>
                <TextField onChange={(e) => handleChange("name", e.target.value)} label="Nome" placeholder='Nome da pasta' />
            </FormGroup>
            <FormGroup>
                <Select  onChange={(v) => handleChange("typeGame", v)} label='Tipo de Jogo' options={typeGame} />
            </FormGroup>
            <FormGroup>
                <Select  onChange={(v) => handleChange("format", v)} label='Formato' options={formats} />
            </FormGroup>
            <FormGroup>
                <Select  onChange={(v) => handleChange("stack", v)} label='Stack' options={stacks} />
            </FormGroup>
            <div style={{ marginTop: 40 }}>
                <Button onClick={handleSubmit}>
                    {folderLoading ? 'Criando...' : 'Criar pasta'}
                </Button>
            </div>
        </Modal>
    );
}

export default CreateFolderModal;