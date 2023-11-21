import { useEffect } from "react";

import { useForm } from "react-hook-form";
import Modal from "react-modal";

import Swal from "sweetalert2";

import { useClientStore, useUiStore } from "../hooks";
import { addressValidations, customStyles, emailValidations, fullNameValidations, phoneValidations } from "../helpers";

const initForm = {
    fullName: "",
    email: "",
    phone: "",
    address: ""
}

Modal.setAppElement('#root');

export const ClientModal = () => {

    const { register, handleSubmit, setError, setFocus, formState: {
        errors,
    }, clearErrors, reset } = useForm({
        defaultValues: initForm
    });

    const { isModalOpen, origin, closeModal } = useUiStore();
    const { startSavingClient, activeClient } = useClientStore()

    // Update Form State if active client
    useEffect(() => {
        if (activeClient !== null) {
            reset(activeClient);
        }
    }, [activeClient]);

    const onSubmit = handleSubmit(async (data) => {
        try {
            // Save new Client
            const res = await startSavingClient(data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: res,
                showConfirmButton: false,
                timer: 2000
            });
            /** Reset Form */
            reset();
            closeModal();
        } catch (error) {
            const { message } = error.response.data;
            setError("email", {
                type: "server",
                message: message
            });
            setFocus("email");
        }
    });

    const closedModalAndClean = () => {
        clearErrors();
        reset();
        closeModal();
    }

    return (
        <Modal
            className="modal"
            overlayClassName="modal-fondo"
            isOpen={isModalOpen}
            closeTimeoutMS={500}
            onRequestClose={closedModalAndClean}
            style={customStyles}
        >
            <div>

                <div className="modal-header">
                    <h5 className="modal-title"><i className="fas fa-user-friends"></i>
                        &nbsp;{origin} CLIENTE</h5>
                    <button
                        onClick={closedModalAndClean}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-2">
                            <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                            <input
                                type="text"
                                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                id="fullName"
                                placeholder="John Doe"
                                {...register("fullName", fullNameValidations)}
                                autoFocus
                            />
                            <span className="invalid-feedback">
                                {errors.fullName && errors.fullName.message}
                            </span>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        placeholder="johndoe@example.com"
                                        {...register("email", emailValidations)}
                                    />
                                    <span className="invalid-feedback">
                                        {errors.email && errors.email.message}
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <label htmlFor="phone" className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        id="phone"
                                        placeholder="97867809"
                                        {...register("phone", phoneValidations)}
                                    />
                                    <span className="invalid-feedback">
                                        {errors.phone && errors.phone.message}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="address" className="form-label">Dirección </label>
                            <textarea
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                id="address"
                                rows="3"
                                placeholder="Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
                                {...register("address", addressValidations)}
                            ></textarea>
                            <span className="invalid-feedback">
                                {errors.address && errors.address.message}
                            </span>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">
                            <i className="fas fa-save"></i> Guardar
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
