const express = require("express");
const db = require("../data/config")

const router = express.Router()

async function find() {
    try {
        res.json(await db("schemes"))
    } catch(err){
        next(err)
    }
}

// router.findById("/:id", validateUserId(), (res, req, next) => {
//     try {
//         res.json(req.scheme)
//     } catch(err) {
//         next(err)
//     }
// })

// // the function below is incomplete. I need to really examine
// // the logic to understand what is going to figure this stuff out
// // but it defiinitely is similair to the findById function
// // which appears complete

// router.findStepsByID("/:id", validateUserId(), (res, req, next) => {
//     try {
//         res.json(req.scheme)
//     } catch(err) {
//         next(err)
//     }
// })

// // router.add() {
// //     console.log("string")
// // }

// router.remove("/:id", validateUserId(), (res, res, next) => {

// })

// function validateUserId() {
// 	return async (req, res, next) => {
// 		try {
// 			const { id } = req.params
// 			const user = await db("schemes").where({ id }).first()

// 			if (!user) {
// 				return res.status(404).json({
// 					message: "User not found",
// 				})
// 			}

// 			req.user = user
// 			next()
// 		} catch(err) {
// 			next(err)
// 		}
// 	}
// }

module.exports = router;