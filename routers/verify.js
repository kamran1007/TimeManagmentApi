const verifytime = (req, res, next) => {
    if (req.body.hours >=7)
    


        {
            res.status(200).json("green")
            console.log('green')
        }
        else{
            res.status(400).json("red")
            console.log('red')

        }
    };
module.exports =  verifytime;