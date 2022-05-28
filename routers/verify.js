const verifytime = (req, res, next) => {
    if (req.body.hours >=7)
    


        {
            res.status(200).json("Green!!! working well")
            console.log('Green')
        }
        else{
            res.status(400).json("Red !!!Need to be improve")
            console.log('Red')

        }
    };
module.exports =  verifytime;
