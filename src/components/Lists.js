function Colors(props){
    return (
    <li style={{color:props.color}}>
        This is {props.color}
    </li>
    );
}

function Rainbow(){
    const colors = ['violet','indigo','blue','green','yellow','orange','red']
    return(
        <>
        <h1>Colors</h1>
        <ul>
            {colors.map( (c) => <Colors color={c}/>  )}
        </ul>
        </>
    )
}

function Day(props){
    return <>
    <p style={{fontSize:props.id*10+'px'}}>
        {props.id}. {props.dayName}
    </p>
    </>
}

function WeekDays(){
    const days = [
        {id:1, dayName:'Sunday'},
        {id:2, dayName:'Monday'},
        {id:3, dayName:'Tuesday'},
        {id:4, dayName:'Wednesday'},
        {id:5, dayName:'Thrusday'},
        {id:6, dayName:'Friday'},
        {id:7, dayName:'Saturday'}
    ];
    return(
        <>
        <h1>Week Days !</h1>
        {days.map( (d) => <Day id={d.id} dayName={d.dayName}/>)}
        </>
    )   
}

export {Rainbow,WeekDays};