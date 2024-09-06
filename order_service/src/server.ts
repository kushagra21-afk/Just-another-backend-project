import app from "./express"

export const serverStart = async()=>{
    try{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log("It is running")
    });}
    catch(err){
        console.log(err)
        process.exit(1);
    }
}
serverStart().then(()=>{
    console.log("server is up")
});