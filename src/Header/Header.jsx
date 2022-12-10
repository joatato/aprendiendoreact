function Header() {
    const comision = "40295";

    function mostrarComision() {
        console.log("log")
        return `Bienvenida comision ${comision}`
    }

    //css in js
    const styleH1 = {
        backgroundColor: "pink",
        padding: "10px",
        margin: "0 auto",
        textAlign: "center",

    }

    return (
        <div>
            <h1 style={styleH1}>{mostrarComision()}</h1>
        </div>
    )
}

export default Header