import { asyncHandler } from "../utils/asyncHandler.js"

// const registerUser = asyncHandler( async (req, res) => {
//     res.status(200).json({
//         message: "OK"
//     })
// })

const registerUser = async (req, res) => {
    console.log(req.body)
    console.log("anujgupta")
    res.status(200).json({
        message: "OK"
    })
}

export { registerUser }