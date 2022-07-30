import * as React from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Modal, TextField, FormGroup, Button } from "../";
import { useRange } from '../../context/ranges';

const INITIAL_VALUE = {
    name: "Open Raise",
    position: ""
}

function CreatePositionModal() {
    const [, setSearchParams] = useSearchParams();
    const { setNewPositionModal, ranges, createRange, listRanges, newPositionModal, setRangeSelected } = useRange()

    const [values, setValues] = React.useState(INITIAL_VALUE)

    function handleChange(name: string, value: string | number | object) {
        setValues((state) => ({ ...state, [name]: value }))
    }

    async function handleSubmit() {
        const data = {
            ...values,
            folderId: ranges[0]?.folderId
        }
        const response = await createRange(data)
        if (response.status === 201) {
            setNewPositionModal(false)
            setSearchParams({ r: response.data._id }, { replace: true })
            await listRanges(data.folderId)
            setRangeSelected(response.data)
            toast.success('Posição criada com sucesso!')
            setValues(INITIAL_VALUE)

        }
    }


    return (
        <Modal open={newPositionModal} onClose={() => setNewPositionModal(false)}>
            <FormGroup>
                <h1>
                    Criar nova posição
                </h1>
            </FormGroup>
            <FormGroup>
                <TextField onChange={(e) => handleChange("position", e.target.value)} label="Posição" placeholder='Nome da posição' />
            </FormGroup>
            <div style={{ marginTop: 40 }}>
                <Button onClick={handleSubmit}>
                    Criar posição
                </Button>
            </div>
        </Modal>
    );
}

export default CreatePositionModal;