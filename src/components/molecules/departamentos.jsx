import Swal from 'sweetalert2';
import "../../assets/styles/producto.css";
import start from '../../assets/images/5 estrellas.png'
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

function Depas() {

    function handleClick() {
        Swal.fire({
            icon: "success",
            text: "Se agrego al Carrito"
        });
    }

    return (
        <>
            <div className="product-page">
                <div className="product-image">
                    <img src={img1} alt="Product Image" />
                    <div className="small-images">
                        <img src={img1} alt="Small Product Image 1" className='imgs1' />
                        <img src={img1} alt="Small Product Image 2" className='imgs2' />
                    </div>
                </div>
                <div className="product-info">
                    <div className='info1'>
                        <p className='title1'>Hotel Luxe </p>
                        <p>5 x 6 M.</p>
                        <p>$120 x Noche</p>
                    </div>
                    <img src={start} className="startimg" alt="" srcset="" />
                    <div className='btnproducto'>
                        <button className="buy-now-button" onClick={handleClick} >Añadir Carrito</button>
                        <button className="w">Pedir por WhatsApp</button>
                    </div>
                </div>
            </div>
            <p className='OtrasI'>OTRAS OBRAS</p>
            <div className='carrusel'>
                <div className="element">
                    <img className='imagenCarre' src={img2} alt="" />
                    <p className='text1'>Hotel Relax</p>
                </div>
                <div className="element">
                    <img className='imagenCarre' src={img3} alt="" />
                    <p className='text1'>Boutique Beds</p>
                </div>
                <div className="element">
                    <img className='imagenCarre' src={img4} alt="" />
                    <p className='text1'>DreamStay</p>
                </div>
                <div className="element"> <img className='imagenCarre' src={img5} alt="" />
                    <p className='text1'>SunnySide Resort</p>
                </div>
            </div>
        </>
    );
}

export default Depas;