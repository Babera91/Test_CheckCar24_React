import '../css/style.css';
import Overviwe from '../img/Overview.jpg';
import FrontSide from '../img/Fiat-frontside.jpg';
import LeftSide from '../img/fiat-leftside.jpg';
import Profil from '../img/Fiat-Profil.jpg';


const Gallary = () => {
    return (
        <div>
            <section id="firstSection">
                <img src={Overviwe} alt="vehicle_show" />
            </section>
            <section id="littleImg">
                <img src={Overviwe} alt="Overview" />
                <img src={FrontSide} alt="Fiat-frontside" />
                <img src={LeftSide} alt="fiat-leftside" />
                <img src={Profil} alt="Fiat-Profil" />
            </section>
        </div>
    );
}

export default Gallary;