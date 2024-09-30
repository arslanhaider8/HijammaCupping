const mongoose = require ('mongoose');
const user = require('./usermodel');


const inventoryschema = new mongoose.Schema ({
    kitname: {
        type: String, 
        required : true 
        
    },

    description : {
        type: String, 
    },

    quantity : {
        type: String, 
        required : true,
        default : 1 
    },
     
     practitionerid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Practitioner',
        required : true 
     }
})

module.exports = mongoose.model ('inventory', inventoryschema);