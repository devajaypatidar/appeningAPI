const areAnagrams = require('../utils/anagram')

const searchString = (req,res)=>{
    const {string} = req.body;
    // console.log(string);
    const stringArray = ["Race","Part","Heart","Listen"];

    const isFound = stringArray.some(arrayString => areAnagrams(string,arrayString))

    res.status(200).json({result:isFound});
}

module.exports = searchString;