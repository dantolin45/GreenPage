import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

const FormikUser = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()

        alert(`
        Name: ${name}
        Password: ${password}
      `)
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Un nombre es requerido"),
        password: Yup.string()
            .required("Una contraseña es requerida")
            .min(8, "La contraseña debe de constar de al menos 8 caracteres"),

    });


    return (
        <>
            <Formik
                initialValues={{ name, password }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                    <Modal.Footer>
                        <button variant="primary" type="submit">
                            Log In
                        </button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </>)
}

export default FormikUser;