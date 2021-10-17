import SideBar from "../components/bar";
import VehicleName from "../components/vehicleName";
import Gallary from "../components/gallary";
import VehicleDetails from "../components/vehilceDetails";
import VehicleDescriptions from "../components/vehicleDescription";
import CO2 from "../components/consumOptionValues";
import Form from "../components/form";
import Payment from "../components/vehicleInPayment";
import Test from "../components/testBorder";
const Fiat = () => {
    return (
        <div>
            <VehicleName />
            
            <Gallary />
            <VehicleDetails />
            <VehicleDescriptions />
            <CO2 />
            <Test />
            <Payment />
            <Test />
            <Form />
           
            
        </div>

    );
}

export default Fiat;