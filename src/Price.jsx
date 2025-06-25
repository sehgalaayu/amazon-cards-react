export default function Price({oldPrice,newPrice}){

    let oldStyle = {
        textDecorationLine: "line-through",
    };
    let newStyle = {
        fontWeight: "bold"
    };
    let styles = {
        backgroundColor: "#e0c637",

    }
    return(
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}
