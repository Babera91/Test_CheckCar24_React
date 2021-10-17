import CO2 from "../img/CO2_A.svg"
const ConsumOptionValues = () => {
    return (
        <div>
            <div id="consumptionValues">
                <div>
                    <h3>VERBRAUCHSWERTE:</h3>
                    <p>4.1 l / 100km (kombiniert)</p>
                    <p>4.9 l / 100km (innerorts)</p>
                    <p>3.6 l / 100km (außerorts)</p>
                    <p><span>CO2-Emissionen:</span>93 g/km</p>
                    <p><span>Euronorm: </span>6d</p>
                </div>
                <div id="effcient">
                    <h3>ENERGIEEFFIZIENZKLASSE:</h3>
                    <img src={CO2} alt="bar" />
                </div>
            </div>
        </div>

    );
}

export default ConsumOptionValues;