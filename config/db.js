const { default: mongoose } = require("mongoose")

const db=()=>{
    mongoose.connect('mongodb+srv://graphql_db:Jyotigraphql123@graphql.6q1sp.mongodb.net/graph/ticket')
    .then(()=>{
        console.log("db connected...👍"); 
    })
    .catch((error)=>{
        console.log(error);
        
    })
}

module.exports=db