// let state = {
//     count : 0,
//     name : "Vikram"
// }
// //Mutating state
// //state.count =state.count+1;


// function increment (){

//     //Not Mutatating stae
//     state = {count : state.count+1}
// }
// increment();
// console.log(state); 



let reduxState ={
    count : 0,
    name : "Vikram",
    age : 25
}

function reducer(state,action) {
    console.log(action)
    return {...state, post:state.post+1}
}
reduxState = reducer(reduxState,action)