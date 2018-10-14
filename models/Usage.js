const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const UsageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    premisetype: {
        type: String
    },
    usage: {
        type: Array,
        required: true,
        validate: [arrayLimit, '12 months of usage required']
    }
})

// insure 12 months of data received
function arrayLimit(val) {
    return val.length === 12;
  }
module.exports = Usage = mongoose.model('usagerequests',UsageSchema);
