import { Formik, Field,Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import Modal from 'react-bootstrap/Modal';
import { useUserContext } from "../context/userContext";



const FormikUser =() =>{

    
    const context= useUserContext();
    
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required("Un nombre es requerido"),
            
        password: Yup.string()
            .required("Una contraseña es requerida")
            .min(8, "La contraseña debe de constar de al menos 8 caracteres"),

    });

    
return (
    <>
        <Formik
            initialValues={{
                name: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert("Bienvenido "+ values.name + " !");
                
                context.changueUser(values);
            }}
        >
     
                <Form >
                <label> Usuario:
                    <Field 
                    className="input-text"
                    type="text" 
                    placeholder="Introduce tu usuario" 
                    name="name" 
                    autoCapitalize="true"
                    maxLength="8" 
                    size="100"
                    required
                    autoComplete="off"
                    />
                    </label>
                    <p className="error-message">
                    <ErrorMessage className="error-message" name="name" />
                    </p>
                    
                    <label> Contraseña: <Field 
                    className="input-text"
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    autoCapitalize="false"
                    size="100"
                    required
                    /></label>
                    <p className="error-message">
                    <ErrorMessage name="password" />
                    </p>
                    <Modal.Footer >
                        <button className="logInButton"  type="submit" >Log In</button>

                    </Modal.Footer>
                </Form>
      
        </Formik>
    </>
    )
}

export default FormikUser;