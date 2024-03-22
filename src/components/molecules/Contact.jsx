import { useRef } from "react";
import imgcontact from "../../assets/images/imgcontac.jpg"
import "../../assets/styles/contact.css"
import Swal from "sweetalert2";

function Contact() {
    const formRef = useRef();
    const nombre = useRef();
    const email = useRef();
    const telefono = useRef();
    const mensaje = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // Esto previene el comportamiento por defecto del formulario
        const URI = "http://127.0.0.1:3000/Contact";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Nombre: nombre.current.value,
                Email: email.current.value,
                Telefono: telefono.current.value,
                Mensaje: mensaje.current.value,
            }),
        };
        fetch(URI, options)
            .then((response) => {
                if (response.headers.get('content-type').includes('application/json')) {
                    return response.json();
                } else {
                    throw new Error('El servidor no devolvió un JSON válido');
                }
            })
            .then((data) => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: data.message
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al mandar los datos.'
                });
            });
    }


    return (
        <div className="contacto-padre">
            <div className="imgf">
                <img src={imgcontact}></img>
            </div>
            <div className='formDiv' >
                <form ref={formRef}>
                    <div className='contacto-hijo'>
                        <div>
                            <label >Nombre: </label>
                            <input className='input' type="text" name="nombre" ref={nombre} required />
                        </div>
                        <div>
                            <label for="email">Email: </label>
                            <input className='input' type="email" name="email" ref={email} required />
                        </div>
                        <div>
                            <label className="nombre">Telefono: </label>
                            <input className='input' type="tel" name="telefono" ref={telefono} required />
                        </div>
                        <div>
                            <label for="mensaje">Mensaje: </label>
                            <input className='input' type="men" name='mensaje' ref={mensaje} required />

                        </div>
                        <button className="button" onClick={handleSubmit}>Enviar</button>

                    </div>

                </form>
            </div>
        </div>

    );
}

export default Contact;