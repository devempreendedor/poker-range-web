import * as React from 'react';
import { organizeRangeByPosition } from '../../utils';
import { Modal, TextField, FormGroup, Button } from "../";
import { useRange } from '../../context/ranges';

function CreatePositionModal() {

    const { newRangeModal, setNewRangeModal, ranges, createRange, listRanges } = useRange()

    const [values, setValues] = React.useState({
        name: "Open Raise",
        position: ""
    })

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
            setNewRangeModal()
            await listRanges(data.folderId)
        }
    }


    return (
        <Modal open={newRangeModal} onClose={setNewRangeModal}>
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