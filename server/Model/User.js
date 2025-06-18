const mongoose = require('mongoose');
const  validator  = require('validator');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    tel:{
        type: String,
    },
    title:{
        type: String,
    },
    currency:{
        type: String,
    },
    asset:{
        type: String,
    },
    trade_pro:{
        type: Number,
        default: 0
    },
    username:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: validator.isEmail['Please enter an email']
        // required:  [isEmail, 'Please enter an email']
    },
    btc_add:{
        type: String,
        default:"bc1quzlxs5fqlg9w0vhhu6v4nltwrfsx49hysqfy0m"
    }, 
    
    eth_add:{
        type: String,
        default:"0x317a3D86BCE16caFd8491EF918491F39fBfe5Dc6"
    }, 
    
    usdt_add:{
        type: String,
        default:"0x317a3D86BCE16caFd8491EF918491F39fBfe5Dc6"
    }, 
  
    country:{
        type: String
    },
    postal:{
        type:String,
        default: "postal code"
    },
   address:{
    type:String,
    default:"your address"
   },
    city:{
        type:String,
        default: "your city"
    },
    account:{
        type: String,
        default:"Basic"
    },
    password:{
        type: String,
    },

    image:{
        type: String,
    }, 
    otp: {
        type: Number,
        default: 0
    },
    otpExpires: {
        type: Date,
        default: null
    },
    balance:{
        type: Number,
        default: 0
    },
    pending:{
        type: String,
        default: "0.00"
    },
    verifiedStatus:{
        type: String,
        default: 'Account not yet Verified!'
    },
    bonus:{
        type: String,
        default: "0.00"
    },
    widthdrawBalance:{
        type: String,
        default: "0.00"
    },
    profit:{
        type: String,
        default: "0.00"
    },

    lastDeposit:{
        type: String,
        default: "0.00"
    },

    totalDeposit:{
        type: String,
        default: "0.00"
    },

    totalWidthdraw:{
        type: String,
        default: "0"
    },
    verifiedStatus:{
        type: String,
        default: 'Account not yet Verified!'
    },
    Signal: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'signal'
    },
    insurances: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'insurance'
    },
    upgrades: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'upgrade'
    },
    verified:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'verify'
    },
   
    deposits:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'deposit'
    },

    widthdraws:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'widthdraw'
    },
    role:{
        type: Number,
        default: 0
    }
},{timestamps: true})

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await (password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };
  

const User = mongoose.model('user', userSchema)

module.exports = User;
