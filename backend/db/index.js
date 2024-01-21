const mongoose=require('mongoose')
const chalk=require('chalk')
const {mongoUrl}=require('../config/keys')

let connection;
connection=mongoose.createConnection(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

if(connection){
    console.log(chalk.blue(`Backend DB connected ${mongoUrl}`))
    console.log(chalk.bgBlue(`Connected successfully with Backend DB ${mongoUrl}`))
}
module.exports=connection;