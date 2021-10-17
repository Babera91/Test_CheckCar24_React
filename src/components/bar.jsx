import '../css/style.css';
const SideBar = () => {
    return (
        <div id="stickyDiv">
            <p className="headLine">FINANZIERUNG</p>
            <p className="number">69,00 €</p>
            <p className="month">pro Monat</p>
            <p className="contition">inkl. 19% MwSt | 37 Monate Laufzeit</p>
            <p className="headLine">LEASING</p>
            <p className="number">79,00 €</p>
            <p className="month">pro Monat</p>
            <p className="contition">inkl. 19% MwSt. 36 Monate Laufzeit</p>
            <div id="calculation">
                <div>
                    <p>UVP</p>
                    <p>21.320,00 €</p>
                </div>
                <div>
                    <p>Preisvorteil</p>
                    <p>5.830,00 €</p>
                </div>
                <div>
                    <p>Hauspreis</p>
                    <p>15.490,00 €</p>
                </div>
            </div>
            <button>Anfrage Starten </button>
        </div>
    );
}

export default SideBar;