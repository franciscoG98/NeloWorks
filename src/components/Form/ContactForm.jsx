import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./contactFormStyles.scss";

const ContactForm = () => {
    const [formSent, setFormSent] = useState(false);

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
            }}
            validate={(values) => {
                let errors = {};

                if (!values.name) {
                    errors.name = "Please enter a first and last name";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                    errors.name = "El nombre debe inluir solo letras y espacios"
                }

                if (!values.email) {
                    errors.email = "Por favor ingrese un email";
                } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        values.email
                    )
                ) {
                    errors.correo =
                        "El email puede incluir solamente letras, números, puntos, guines and guiones bajos";
                }

                if (!values.message) {
                    errors.message = "Por favor ingrese un mensaje";
                }

                if (values.message.length < 100) {
                    errors.message = "El mensaje debe contener minimo 100 caracteres";
                }

                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(values);
                console.log("formulario enviado");
                setFormSent(true);
                setTimeout(() => setFormSent(false), 5000);
            }}
        >
            {({ errors }) => (
                <Form className="contact__form ">
                    <div>
                        <Field
                            className="form_input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                        />
                        <ErrorMessage
                            name="name"
                            component={() => (
                                <div className="error_message">
                                    {errors.name}
                                </div>
                            )}
                        />
                        <Field
                            className="form_input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            name="email"
                            component={() => (
                                <div className="error_message">
                                    {errors.email}
                                </div>
                            )}
                        />
                        <Field
                            className="form_input"
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Telefono"
                        />
                        <Field
                            className="form_input"
                            as="textarea"
                            placeholder="Mensaje"
                            type="text"
                            name="message"
                            id="message"
                            rows="4"
                        />
                        <ErrorMessage
                            name="message"
                            component={() => (
                                <div className="error_message">
                                    {errors.message}
                                </div>
                            )}
                        />
                    </div>
                    <div>
                        <button
                            className="submit_btn"
                            type="submit"
                            value="submit"
                        >
                            Enviar
                        </button>
                        {formSent && (
                            <p className="success_message">
                                The email has been sent successfully!
                            </p>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
