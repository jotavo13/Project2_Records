const {mongoose} = require("../db/connection");
// const Schema = mongoose.Schema;

const fiberIdSchema = new Schema({
    fiberID: String, 
    DeviceA: String,
    TypeOfConnectorOfA: String,
    locationOfDeviceA:String,
    TypeOfFiber:String,
    DeviceB: String,
    TypeOfConnectorOfB: String,
    locationOfDeviceB:String,
})

const FiberId = mongoose.model("FiberId", fiberIdSchema);

module.exports = FiberId;