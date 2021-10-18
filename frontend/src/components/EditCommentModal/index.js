import { useState } from 'react'
import EditReviewForm from "./editreview";
import { Modal } from '../../context/Modal'


function EditReviewFormModal({id}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='bb' id='buts2' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    }}>
                    <EditReviewForm setShowModal={setShowModal} id={id}/>
                </Modal>
            )}
        </>

    )
}

export default EditReviewFormModal
