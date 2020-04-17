// EXPRESS
const express = require('express')

// MODELS
const USERS_MODEL = require('../models/users_model.js')

// ROUTER
const router = express.Router()

// __MAIN__
    // - GET - //
        // - 1 - // Get ALL users
        router.get('/all', async(req,res) => {
        // console.log('** USERS ROUTE: users/all GET/')
        // -- //
            USERS_MODEL.getAll()
                .then( allUsers => {
                // console.log(allUsers.rows)
                // -- //
                    res.status(200).json(allUsers.rows)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(200).json(err)
            })
        })

        // - 2 - // Get INDIVIDUAL user
        router.get('/:id', async(req, res) => {
        // console.log('** USERS ROUTE: users/:id GET/')
        const { id } = req.params
        // console.log('GET THIS USER: ', id)
        // -- //
            USERS_MODEL.getByID(id)
                .then( foundUser => {
                console.log(foundUser.rows)
                // -- //
                    if (foundUser.rows.length  === 0) {
                        res.status(500).json({ error: 'User not in database'})
                    } else {
                        res.status(200).json(foundUser.rows[0])
                    }
                })
                .catch( err => {
                    // console.log(err)
                    // -- //
                        res.status(200).json(err)
                })
        })

    // - PUT - //
        // - 1 - // Update Individual User
            router.put('/:userID', async(req,res) => {
            // console.log('** USERS ROUTE: users/:userID PUT/')
            const { userID } = req.params
            // console.log('UPDATE THIS USER: ', userID)
            // console.log('UPDATE DATA: ', req.body)
            // -- //
                // KNEX_BD('users').where({userID}).update(req.body)
                USERS_MODEL.updateUser(userID, req.body)
                    .then( updateResults => {
                    // console.log(updateResults)
                    // -- //
                        res.status(200).json(updateResults.rows[0])
                    })
                    .catch( err => {
                    // console.log(err)
                    // -- // 
                        res.status(500).json( {error: 'Unabel to update user'})
                    })
            })

        // - 2 - // Update Individual User Privileges
            // TODO: Move to separate Admin Routing
            router.put('/privileges/:userID',  async (req,res) => {
            const {userID} = req.params
            // console.log(userID)
            // console.log(req.body)
            // -- //
                USERS_MODEL.updatePrivileges(userID, req.body)
                    .then( updateResults => {
                    // console.log(updateResults)
                    // -- //
                        res.status(200).json(updateResults.rows[0])
                    })
                    .catch( err => {
                    // console.log(err)
                    // -- //
                        res.status(500).json(err)
                    })
            })

    // - DEL - //
        router.delete('/:userID', async(req, res) => {
        const {userID} = req.params
        // -- //
            USERS_MODEL.deleteUser(userID)
                .then( results => {
                // console.log(results.rows)
                // -- //
                    res.status(200).json(results.rows)
                })
                .catch( err => {
                // console.log(err)
                // -- // 
                    res.status(500).json(err)
                })
        })

// EXPORTS
module.exports = router