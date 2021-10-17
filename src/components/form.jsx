import "../css/style.css"
const Form = () => {
    return (
        <div id="bgInfo">
            <h2>FAHRZEUG JETZT ANFRAGEN!</h2>
            <div id="Info">
                
                <div>
                    <input type="text" name="First_Name" id="FirstName" placeholder="First Name" />
                </div>
                <div>
                    <input type="text" name="Last_Name" id="LastName" placeholder="Last Name" />
                </div>
                <div>
                    <input type="email" name="email_field" id="Email" placeholder="massage@xxx.de" />
                </div>
                <div>
                    <input type="number" name="Phonenumber" id="Phone" placeholder="Phone Number" />
                </div>
                <div>
                    <select name="Call" id="" placeholder="Time of Calling">
                        <option value="">07:00 - 09:00</option>
                        <option value="">09:00 - 11:00</option>
                        <option value="">11:00 - 13:00</option>
                        <option value="">13:00 - 15:00</option>
                        <option value="">15:00 - 17:00</option>
                        <option value="">17:00 - 19:00</option>
                        <option value="">19:00 - 21:00</option>
                    </select>
                </div>
            </div>

            <textarea name="massage_field" id="Massage" cols="30" rows="10" placeholder="Your Massage" />
        </div >
    );
}

export default Form;