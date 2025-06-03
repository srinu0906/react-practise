// function Vote(props){
//     return <>
//     if({props.age >= 18}){
//         <h1>Eligible</h1>
//     }
//     else{
//         <h1>Not Eligible</h1>
//     }
//     </>
// }

function Eligible(){
    return <h1>Eligible!</h1>
}

function NotEligibile(){
    return <h1>Not Eligible !</h1>
}


/*      if else     */
// function Vote(props){
//     const age = props.age
//     if(age >= 18){
//         return <Eligible/>
//     } else {
//        return <NotEligibile/>
//     }
// }

/*      && Operator     */
// function Vote(props){
//     const age= props.age
//     return(
//         <>
//         {age >= 18 && <Eligible/>}
//         </>
//     )
// }

/* Ternary Operator     */
function Vote(attrs){
    const age = attrs.age;
    return(
        <>
        {age>=18 ? <Eligible/> : <NotEligibile/>}
        </>
    )
}
export {Vote};