export default function Price({oldPrice,newPrice}){

    let oldStyle = {
        textDecorationLine: "line-through",
        color: "#888",
        fontSize: "1.1rem",
        marginRight: "12px"
    };
    let newStyle = {
        fontWeight: "bold",
        color: "#111",
        fontSize: "1.35rem",
        marginRight: "6px"
    };
    let styles = {
        background: "#ffd814",
        minHeight: "44px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 12px",
        gap: "8px",
        margin: "0 auto",
        width: "100%",
        marginTop: "0.5rem"
    }
    return(
        <div style={styles}>
            <span style={oldStyle}>&#8377;{oldPrice}</span>
            <span style={newStyle}>&#8377;{newPrice}<span style={{fontWeight:'bold'}}>*</span></span>
        </div>
    )
}
