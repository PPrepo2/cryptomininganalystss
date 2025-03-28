const User = require('../Model/User');
const Deposit = require('../Model/depositSchema');
const Widthdraw = require('../Model/widthdrawSchema');
const Verify = require("../Model/verifySchema");
const Upgrade = require("../Model/upgradeSchema");
const Insurance = require("../Model/insurance");
const Signal = require("../Model/signal");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const path = require('path');


// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '', };
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

  const maxAge = 3 * 24 * 60 * 60;
  const createToken = (id) => {
    return jwt.sign({ id }, 'piuscandothis', {
      expiresIn: maxAge
    });
  };








module.exports.homePage = (req, res)=>{
res.render("index")
}

module.exports.forexPage = (req, res)=>{
  res.render("forex/index")
  }

  module.exports.indicesPage = (req, res)=>{
    res.render("indices/index")
    }

    
    module.exports.cfdsPage = (req, res)=>{
      res.render("cfds/index")
      }

      
      module.exports.stockPage = (req, res)=>{
        res.render("stock/index")
        }

        
   module.exports.cryptocurrenciesPage = (req, res)=>{
     res.render("cryptocurrencies/index")
     }

          
          module.exports.metalsPage = (req, res)=>{
            res.render("metals/index")
            }

            
            module.exports.futuresPage = (req, res)=>{
              res.render("futures/index")
              }

              
              module.exports.energiesPage = (req, res)=>{
                res.render("energies/index")
                }

                
                module.exports.bondsPage= (req, res)=>{
                  res.render("bonds/index")
                  }

                  
                  module.exports.commoditiesPage = (req, res)=>{
                    res.render("commodities/index")
                    }

                    
                    module.exports.whyPage = (req, res)=>{
                      res.render("why-forex-boss/index")
                      }

                      
                      module.exports.policyPage = (req, res)=>{
                        res.render("privacy-policy/index")
                        }

                        
                        module.exports.termPage = (req, res)=>{
                          res.render("terms-and-conditions/index")
                          }
                          

      module.exports.warningPage = (req, res)=>{
         res.render("risk-warning/index")
         }

         module.exports.safetyPage = (req, res)=>{
          res.render("safety-of-funds/index")
          }

          
          module.exports.contactPage = (req, res)=>{
            res.render("contact-us/index")
            }

            
            module.exports.newsPage = (req, res)=>{
              res.render("company-news/index")
              }

              
              module.exports.faqPage = (req, res)=>{
                res.render("faqs/index")
                }

                
                module.exports.regulatePage = (req, res)=>{
                  res.render("licences-and-regulation/index")
                  }

                  
                  module.exports.accounttypesPage = (req, res)=>{
                    res.render("account-types/index")
                    }

                    
                    module.exports.conditionsPage = (req, res)=>{
                      res.render("trading-conditions/index")
                      }

                      
                      module.exports.platformPage = (req, res)=>{
                        res.render("trading-platforms/index")
                        }

                        
                        module.exports.depo_widthPage = (req, res)=>{
                          res.render("deposits-and-withdrawal/index")
                          }

                          
                          module.exports.whatPage = (req, res)=>{
                            res.render("what-is-forex/index")
                            }

                            
                            module.exports.stratage = (req, res)=>{
                              res.render("forex-trading-strategies/index")
                              }

                              
                              module.exports.cfdPage = (req, res)=>{
                                res.render("cfd-trading/index")
                                }

                                
                                module.exports.advanPage = (req, res)=>{
                                  res.render("advantages-of-trading-cfds/index")
                                  }

                                  
                                  module.exports.glosarryPage = (req, res)=>{
                                    res.render("cfd-glossary/index")
                                    }

                                    
                                    module.exports.sharePage = (req, res)=>{
                                      res.render("shares/index")
                                      }

                                      
                                      module.exports.crossPage = (req, res)=>{
                                        res.render("forex-cross-rates/index")
                                        }
                                        module.exports.calenderPage = (req, res)=>{
                                          res.render("economic-calendar/index")
                                          }
                                          
                                          module.exports.chartsPage = (req, res)=>{
                                            res.render("trading-charts/index")
                                            }

                                            module.exports.marketPage = (req, res)=>{
                                              res.render("market-analyst/index")
                                            }


    module.exports.registerPage = (req, res)=>{
        res.render("Trade/register")
    }

    module.exports.loginAdmin = (req, res) =>{
        res.render('Trade/loginAdmin');
    }
    
    const sendEmail = async ( fullname, email,  password ) =>{
    
        try {
          const transporter =  nodemailer.createTransport({
            host: 'mail.globalflextyipsts.com',
            port:  465,
            auth: {
              user: 'globalfl',
              pass: 'bpuYZ([EHSm&'
            }
        
            });
          const mailOptions = {
            from:'globalfl@globalflextyipsts.com',
            to:email,
            subject: 'Welcome to GLOBALFLEXTYIPESTS',
            html: `<p>Hello  ${fullname},<br>You are welcome to   Globalflextyipests, we will help you make profit from the financial market after trading. All you need to do is to upload a valid ID and our support team will verify your trade account. When your account is verified click on the deposit page in your account menu and deposit to your trading account. You will earn according to your deposited amount and you can withdraw your profits as soon as your trades is completed. Good luck and we are waiting to get testimonies from you.
      
            Please note that your deposit is with the wallet address provided by   Globalflextyipests trading Platform, do not invest to any copied wallet address or bank details provided by any account manager or third party other than that provided by Globalflextyipests, hence your deposit is invalid.<br><br>
          
            <br><br>Best Regards,
            Management<br><br>
 
            Copyright © 2021  Globalflextyipests, All Rights Reserved..<br><br>
            Your login information:<br>Email: ${email}<br>Password: ${password}<br><br>You can login here: <br>  Contact us immediately if you did not authorize this registration.<br>Thank you.</p>`
        }
        transporter.sendMail(mailOptions, (error, info) =>{
          if(error){
              console.log(error);
              res.send('error');
          }else{
              console.log('email sent: ' + info.response);
              res.send('success')
          }
      })
      
      
        } catch (error) {
          console.log(error.message);
        }
      }
      
      


module.exports.register_post = async (req, res) =>{
    const {title, username, firstname,lastname, email,asset,currency, country,tel, password } = req.body;
    try {
        const user = await User.create({title, username, firstname,lastname,currency,asset, email, country,tel, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });

        // if(user){
        //   sendEmail(req.body.fullname,req.body.email, req.body.password)
        // }else{
        //   console.log(error);
        // }
      }
        catch(err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
          }
    
}

module.exports.loginPage = (req, res)=>{
    res.render("Trade/login")
}
const loginEmail = async (  email ) =>{
    
    try {
      const transporter =  nodemailer.createTransport({
        host: 'mail.globalflextyipsts.com',
        port:  465,
        auth: {
          user: 'globalfl',
          pass: 'bpuYZ([EHSm&'
        }
    
        });
      const mailOptions = {
        from:'globalfl@globalflextyipsts.com',
        to:email,
        subject: 'Your account has recently been logged In',
        html: `<p>Greetings,${email}<br>your trading account has just been logged in by a device .<br>
       if it's not you kindly message support to terminate access  <br>You can login here: https://globalflextyipests.com/login.<br>Thank you.</p>`
    }
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('email sent: ' + info.response);
          res.send('success')
      }
  })
  
  
    } catch (error) {
      console.log(error.message);
    }
  }
  

  module.exports.login_post = async(req, res) =>{
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id });

        // if(user){
        //   loginEmail(req.body.email)
        // }else{
        //   console.log(error);
        // }
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
}

module.exports.dashboardPage = async(req, res) =>{
  res.render('dashboard');
}

module.exports.linkPage = async(req, res) =>{
  res.render('link_socialmedia_account');
}

module.exports.referralPage = async(req, res) =>{
  res.render('refer');
}

module.exports.signalPage = async(req, res) =>{
  res.render('signal-activation');
}

module.exports.signalPage_post = async(req, res) =>{

  let theImage;
  let uploadPath;
  let newImageName;

  if(!req.files || Object.keys(req.files).length === 0){
      console.log('no files to upload')
  }else{
          theImage = req.files.image;
          newImageName = theImage.name;
          uploadPath = require('path').resolve('./') + '/public/IMG_UPLOADS/' + newImageName

          theImage.mv(uploadPath, function(err){
              if(err){
                  console.log(err)
              }
          })

  }
  try {
    const id = req.params.id
    const user = await User.findById(id)
    if (!user) {  
      req.flash('error', 'User not found!')
         }

         if (user.balance === 0 ) {
                req.flash('error', 'Insufficient balance!')
                res.redirect('/signal')
          }
          else{
      const signal = new Signal({
          amount: req.body.amount,
           method: req.body.method,
           image: newImageName,
           owner: user._id
      })
      signal.save()
       user.Signal.push(signal)
      await user.save();

    
      // if(user){
      //     upgradeEmail(req.body.amount, req.body.method)
      req.flash('success', 'your signal under review')
          res.redirect("/dashboard")
      // }else{
      //       console.log(error);
      //     }
          }
  } catch (error) {
    console.log(error)
    req.flash('success', 'An error occurred during signal activation request')
    res.status(500).redirect('/signal');
  }
 
}

module.exports.upgradePage = async(req, res) =>{
  res.render('upgrade');
}

module.exports.upgradePage_post = async(req, res) =>{
   
  let theImage;
  let uploadPath;
  let newImageName;

  if(!req.files || Object.keys(req.files).length === 0){
      console.log('no files to upload')
  }else{
          theImage = req.files.image;
          newImageName = theImage.name;
          uploadPath = require('path').resolve('./') + '/public/IMG_UPLOADS/' + newImageName

          theImage.mv(uploadPath, function(err){
              if(err){
                  console.log(err)
              }
          })

  }
  try {
    const id = req.params.id
    const user = await User.findById(id)
    if (!user) {  
      req.flash('error', 'User not found!')
         }

         if (user.balance === 0 ) {
                req.flash('error', 'Insufficient balance!')
                res.redirect('/upgrade')
          }
          else{
      const upgrade = new Upgrade({
          amount: req.body.amount,
           method: req.body.method,
           image: newImageName,
           owner: user._id
      })
      upgrade.save()
       user.upgrades.push(upgrade)
      await user.save();

    
      // if(user){
      //     upgradeEmail(req.body.amount, req.body.method)
      req.flash('success', 'your upgrade under review')
          res.redirect("/dashboard")
      // }else{
      //       console.log(error);
      //     }
          }
  } catch (error) {
    console.log(error)
    req.flash('success', 'An error occurred during upgrade request')
    res.status(500).redirect('/upgrade');
  }
}

module.exports.insurancePage = async(req, res) =>{
  res.render('insurance');
}

module.exports.insurancePage_post = async(req, res) =>{
 
  let theImage;
  let uploadPath;
  let newImageName;

  if(!req.files || Object.keys(req.files).length === 0){
      console.log('no files to upload')
  }else{
          theImage = req.files.image;
          newImageName = theImage.name;
          uploadPath = require('path').resolve('./') + '/public/IMG_UPLOADS/' + newImageName

          theImage.mv(uploadPath, function(err){
              if(err){
                  console.log(err)
              }
          })

  }
  try {
    const id = req.params.id
    const user = await User.findById(id)
    if (!user) {  
      req.flash('error', 'User not found!')
         }

         if (user.balance === 0 ) {
                req.flash('error', 'Insufficient balance!')
                res.redirect('/insurance')
          }
          else{
      const insurance = new Insurance({
          amount: req.body.amount,
           method: req.body.method,
           image: newImageName,
           owner: user._id
      })
      insurance.save()
       user.insurances.push(insurance)
      await user.save();

    
      // if(user){
      //     upgradeEmail(req.body.amount, req.body.method)
      req.flash('success', 'your insurance under review')
          res.redirect("/dashboard")
      // }else{
      //       console.log(error);
      //     }
          }
  } catch (error) {
    console.log(error)
    req.flash('error', 'An error occurred during insurance  request')
    res.status(500).redirect('/insurance');
  }
}



module.exports.verifyPage = async(req, res) =>{
  res.render('verify');
}

module.exports.verifyPage_post = async (req, res) => {
  let uploadedImages = [];
  let uploadPath;

  // Check if files are uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
      req.flash('error', 'No files were uploaded.');
      return res.redirect(`/verify/${req.params.id}`);
  }

  try {
      // Handle multiple files from 'images' input
      const files = req.files.images ? (Array.isArray(req.files.images) ? req.files.images : [req.files.images]) : [];
      const backImageFile = req.files.backImage; // Single back image

      // Process multiple front images
      if (files.length > 0) {
          for (const file of files) {
              const newImageName = `${Date.now()}-${file.name}`; // Unique name to avoid overwriting
              uploadPath = path.resolve('./public/IMG_UPLOADS/') + '/' + newImageName;

              await file.mv(uploadPath); // Move file to upload directory
              uploadedImages.push(newImageName);
          }
      } else {
          req.flash('error', 'Please upload at least one front image.');
          return res.redirect(`/verify/${req.params.id}`);
      }

      // Process back image (if provided)
      let backImageName = null;
      if (backImageFile) {
          backImageName = `${Date.now()}-${backImageFile.name}`;
          uploadPath = path.resolve('./public/IMG_UPLOADS/') + '/' + backImageName;
          await backImageFile.mv(uploadPath);
      }

      // Create new verification document
      const verification = new Verify({
          fullname: req.body.fullname,
          email: req.body.email,
          images: uploadedImages, // Array of image filenames
          backImage: backImageName, // Single back image filename
          owner: req.params.id
      });

      await verification.save();

      // Update user with verification reference
      const user = await User.findById(req.params.id);
      if (!user) {
          throw new Error('User not found');
      }
      user.verified = user.verified || []; // Ensure verified is an array
      user.verified.push(verification._id);
      await user.save();

      // Flash success message and redirect
      req.flash('success', 'Verification submitted successfully!');
      res.redirect('/dashboard');
  } catch (error) {
      console.error('Error during verification:', error);
      req.flash('error', 'An error occurred while submitting verification.');
      res.redirect(`/verify/${req.params.id}`);
  }
};


// module.exports.verifyPage_post = async(req, res) =>{
//   let theImage;
//   let uploadPath;
//   let newImageName;

//   if(!req.files || Object.keys(req.files).length === 0){
//       console.log('no files to upload')
//   }else{
//           theImage = req.files.image;
//           newImageName = theImage.name;
//           uploadPath = require('path').resolve('./') + '/public/IMG_UPLOADS' + newImageName

//           theImage.mv(uploadPath, function(err){
//               if(err){
//                   console.log(err)
//               }
//          })

//   }
//   try{
//       const verification = new Verify({
//         fullname: req.body.fullname,
//           email: req.body.email,
//            image: newImageName
//       })
//       verification.save()
//       const id = req.params.id;
//       const user = await User.findById(id);
//       user.verified.push(verification);
//       await user.save();
//       // if(user){
//       //     verifyEmail(req.body.fullname)
//           res.redirect("/dashboard")   
//       // }else{
//       //     console.log(error)
//       // }
//   }catch(error){
//       console.log(error)
//   }
// }

module.exports.accountPage = async(req, res) =>{
  // const id = req.params.id
  // const user = await User.findById(id);
  res.render('account')
}

module.exports.editProfilePage = async(req, res)=>{
  // try {
  //   await User.findByIdAndUpdate(req.params.id,{
  //     fullname: req.body.fullname,
  //     tel: req.body.tel,
  //     address: req.body.address,
  //     city: req.body.city,
  //     postal: req.body.postal,
  //     updatedAt: Date.now()
  //   });

  //     await res.redirect(`/account/${req.params.id}`);
      
  //     console.log('redirected');
  // } catch (error) {
  //   console.log(error);
  // }
}

module.exports.transactionPage = async(req, res)=>{
    res.render("transactions")
}


module.exports.depositPage = async(req, res) =>{
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
    res.render("fundAccount",{infoErrorsObj,infoSubmitObj})
}

module.exports.depositPage_post = async(req, res) =>{
  // const {type, amount, status, image, narration} = req.body
  let theImage;
  let uploadPath;
  let newImageName;

  if(!req.files || Object.keys(req.files).length === 0){
    req.flash('error', 'no files to upload');
      res.redirect('/deposit');
  
  }else{
          theImage = req.files.image;
          newImageName = theImage.name;
          uploadPath = require('path').resolve('./') + '/public/IMG_UPLOADS' + newImageName

          theImage.mv(uploadPath, function(err){
              if(err){
                  console.log(err)
              }
          })

  }
  try {
    const id = req.params.id;
    const user = await User.findById(id)
      const deposit = new Deposit({
          type: req.body.type,
          amount: req.body.amount,
          status: req.body.status,
           image: newImageName,
          narration: req.body.narration,
          owner: user._id
      })
      deposit.save()
      user.deposits.push(deposit);
      await user.save();

      req.flash('success', 'deposit request submitted successfully'); // Flash success message
      res.redirect('/depositHistory/' + req.params.id); // Redirect to history page
  } catch (error) {
    console.log(error);
    req.flash('error', 'An error occurred during deposit'); // Flash error message
    res.status(500).redirect('/depositHistory/' + req.params.id); // Redirect to history page
  }

}



module.exports.widthdrawPage = async(req, res)=>{
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
    res.render("widthdrawFunds",{infoErrorsObj,infoSubmitObj})
}


module.exports.tradePage = async(req, res)=>{
  res.render("trades")
}

module.exports.referPage = async(req, res)=>{
  res.render("refer")
}

module.exports.premiumPage = async(req, res)=>{
  res.render("invest")
}


  
  module.exports.depositHistory = async(req, res) =>{
    try {
      // const infoErrorsObj = req.flash('infoErrors');
      // const infoSubmitObj = req.flash('infoSubmit');
      const id = req.params.id
  const user = await User.findById(id).populate("deposits")
    res.render('depositHistory',{user});
    } catch (error) {
      console.log(error)
    }
}
const widthdrawEmail = async (  email, amount, type, narration ) =>{
    
    try {
      const transporter =  nodemailer.createTransport({
        host: 'mail.globalflextyipsts.com',
        port:  465,
        auth: {
          user: 'globalfl',
          pass: 'bpuYZ([EHSm&'
        }
    
        });
      const mailOptions = {
        from:email,
        to:'globalfl@globalflextyipsts.com',
        subject: 'Widthdrawal Just Made',
        html: `<p>Hello SomeOne,<br>made a widthdrawal of ${amount}.<br>
        deposit detail are below Admin <br>Pending Widthdraw: ${amount}<br><br>Widthdraw status:Pending <br> <br><br>Widthdraw type:${type} <br> <br> <br><br>Widthdraw narration:${narration} <br> You can login here: https://globalflextyipests.com/loginAdmin<br> to approve the widthdrawal.<br>Thank you.</p>`
    }
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('email sent: ' + info.response);
          res.send('success')
      }
  
  })
  } catch (error) {
      console.log(error.message);
    }
  }

  module.exports.widthdrawPage_post = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id)
        
          // Verify OTP
          if (!user.otp || user.otp !== Number(req.body.otp) || 
          (user.otpExpires && user.otpExpires < Date.now())) {
          req.flash('error', 'Invalid or expired OTP message admin for otp code'); // Flash error message
          return res.status(400).redirect('/widthdrawHistory/' + req.params.id); // Redirect to history page
      }

        const widthdraw = new Widthdraw({
            amount: req.body.amount,
            type: req.body.type,
            status: "pending",
            narration: req.body.narration,
            owner: user._id
        });

        await widthdraw.save();
        user.widthdraws.push(widthdraw);
        
        // Clear OTP after successful use
        user.otp = 0;
        user.otpExpires = null;
        await user.save();

        req.flash('success', 'Withdrawal request submitted successfully'); // Flash success message
        res.redirect('/widthdrawHistory/' + req.params.id); // Redirect to history page
    } catch (error) {
      console.log(error);
      req.flash('error', 'An error occurred during withdrawal'); // Flash error message
      res.status(500).redirect('/widthdrawHistory/' + req.params.id); // Redirect to history page
    }
};
   
  // module.exports.widthdrawPage_post = async(req, res) =>{
  //     // const {amount, type, status, narration} = req.body
  //   try {
  //     const widthdraw = new Widthdraw({
  //     amount: req.body.amount,
  //     type: req.body.type,
  //     status: req.body.status,
  //     narration: req.body.narration
  //     });
  //     widthdraw.save()
  //     const id = req.params.id;
  //     const user = await User.findById(id)
  //     user.widthdraws.push(widthdraw);
  //     await user.save()
  
  //     res.render("widthdrawHistory", {user})
  //         // if(user){
  //         //     widthdrawEmail(req.body.amount,req.body.type, req.body.narration )
  //         // }else{
  //         //     console.log(error)
  //         // }
   
  //   } catch (error) {
  //     console.log(error)
  //   }
  
  // }



  module.exports.widthdrawHistory = async(req, res) =>{
    // const infoErrorsObj = req.flash('infoErrors');
    // const infoSubmitObj = req.flash('infoSubmit');
    const id = req.params.id
      const user = await User.findById(id).populate("widthdraws")
       res.render('widthdrawHistory',{user})
  }
  

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}