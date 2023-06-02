 const Slot1 = (props) =>{

    let x= props.x;
    let y= props.y;
    let z= props.z;

    if((x === y) && (y === z)){
        return(
            <>
            <h1>{x}{y}{z}</h1>
            <h2>this is matching</h2>
            </>
        )
    }else{
        <h1>no luck</h1>

    }
}

export default Slot1;
