import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
name:'user',

initialState:{
    user:[
        {name:"Rob Brown", 
        RentalDetails:"Trip to Kumasi",
        RentalDuration:"One Day", 
        Email:"Rbrown@yahoo.com" },
    ]
},

reducers:{
createUser: (state)=>{


},

viewUser: (state)=>{
return state.request

},

updateUser: (state)=>{


},



deleteUser: (state)=>{


     },


 }

 })


export const{createUser,viewUser,updateUser,deleteUser}= userSlice.actions;

export default userSlice.reducer;



