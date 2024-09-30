const mongoose = require ('mongoose');


const appointmentschema = new mongoose.Schema ({
    patientid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'Practitioner' ,
        required : true 

    },

    practitionerid : {
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'Practitioner' ,
        required : true 

    },
    
    date : {
        type : Date , 
        required : true 
    },

    time : {
        type: String, 
        required : true 
    },

    status : {
        type: String ,
        enum: ['scheduled', 'completed', 'canceled'],
        default: 'scheduled',
    }
})

module.exports = mongoose.model ('appointment', appointmentschema);