import '../css/style.css';
import Logo from '../img/fiat-logo.png'
const VehicleName = () => {
    return (
        <div id="Header">
            <img src={Logo} alt="Fiat.logo" />
            <div>
                <h2>FIAT 500 M-HYBRID</h2>
                <p>STAR 1.0</p>
                <p>Tempomat, PDC, Klimaautomatik, Navi, DAB+</p>
            </div>
        </div>
    );
}

export default VehicleName;