import * as React from 'react';
import { organizeRangeByPosition } from '../../utils';
import { Modal, TextField, FormGroup, Button, Select } from "../";
import { useRange } from '../../context/ranges';

function CreateRangeModal() {

    const { newRangeModal, setNewRangeModal, ranges, createRange } = useRange()
    const positions = organizeRangeByPosition(ranges).map(r => ({ label: r.position, value: r.position }))

    const [values, setValues] = React.useState({
        name: "",
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
        }
    }


    return (
        <Modal open={newRangeModal} onClose={setNewRangeModal}>
            <FormGroup>
                <TextField onChange={(e) => handleChange("name", e.target.value)} label="Nome" placeholder='Nome do range' />
            </FormGroup>
            <FormGroup>
                <Select  onChange={(v) => handleChange("position", v)} label='Posição' options={positions} />
            </FormGroup>
            <div style={{ marginTop: 40 }}>
                <Button onClick={handleSubmit}>
                    Criar range
                </Button>
            </div>
        </Modal>
    );
}

export default CreateRangeModal;