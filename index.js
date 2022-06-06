const dbConnect = require("./mongoconfig")

const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}   
main()