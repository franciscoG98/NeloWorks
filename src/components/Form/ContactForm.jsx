import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "@emailjs/browser";
import "./contactFormStyles.scss";

const ContactForm = () => {
    const [formSent, setFormSent] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("* El nombre es requerido"),
            email: Yup.string()
                .email("Ingrese un email valido")
                .required("* El email es requerido"),
            message: Yup.string().required("* El mensaje es requerido"),
        }),
        onSubmit: (values) => {
            console.log("values:\n", values);
            emailjs
                .send(
                    "service_4khbtvf",
                    "template_aimvqja",
                    values,
                    "-qC5fYPWWvQb0xA6J"
                )
                .then((res) => {
                    console.log("response:\n", res);
                    setFormSent(true);
                    alert("Email enviado!");
                    setTimeout(() => {
                        setFormSent(false);
                    }, 50000);
                    formik.resetForm();
                })
                .catch((error) => console.log("error:\n", error));
        },
    });

    return (
        <form className="contact__form" onSubmit={formik.handleSubmit}>
            <div>
                <input
                    className="form_input"
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.values.name.touched && <div className="error_message">{formik.errors.name}</div>}
                <input
                    className="form_input"
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && <div className="error_message">{formik.errors.email}</div>}
                <input
                    className="form_input"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Telefono"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                <input
                    className="form_input"
                    as="textarea"
                    placeholder="Mensaje"
                    type="text"
                    name="message"
                    id="message"
                    rows="4"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />
                {formik.errors.message && formik.values.message.touched && <div className="error_message">{formik.errors.message}</div>}
            </div>
            <div>
                <button className="submit_btn" type="submit" value="send">
                    Enviar
                </button>
                {formSent && (
                    <p className="success_message">
                        The email has been sent successfully!
                    </p>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
