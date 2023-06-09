const { mongoose } = require("../db/connection");
// const Schema = mongoose.Schema;

const fiberSchema = new mongoose.Schema({
    fiberID: String, 
    DeviceA: String,
    TypeOfConnectorOfA: String,
    locationOfDeviceA:String,
    TypeOfFiber:String,
    IMG:String,
    DeviceB: String,
    TypeOfConnectorOfB: String,
    locationOfDeviceB:String,
    isItWorking: Boolean
}, {timestamps: true})

const Fiber = mongoose.model("Fiber", fiberSchema, 'fibers' );

module.exports = Fiber