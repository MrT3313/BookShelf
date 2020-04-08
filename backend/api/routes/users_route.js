// IMPORTS
const express = require('express')
const KNEX_BD = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// __MAIN__
    // - GET - //
        // - 1 - // TEST
        router.get('/test', async(req,res) => {
        console.log('** USERS ROUTE: users/test GET/')
        // -- //
            res.status(200).json({
                message: 'TEST GET request for USERS ROUTE working'
            })
        })

        // - 2 - // Get ALL users
        router.get('/all', async(req,res) => {
        // console.log('** USERS ROUTE: users/all GET/')
        // -- //
            KNEX_BD('users')
                .then( allUsers => {
                // console.log(allUsers)
                // -- //
                    res.status(200).json(allUsers)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(200).json(err)
            })
        })

        // - 3 - // Get INDIVIDUAL user
        router.get('/:id', async(req, res) => {
        // console.log('** USERS ROUTE: users/:id GET/')
        const { id } = req.params
        // console.log('GET THIS USER: ', id)
        // -- //
            // TODO: where is not error handling correctly. If I pass an ID that is NOT in the users table it returns an empty array inside the .then() instead of kicking out to .catch()
            // V2
            KNEX_BD('users').where({id})
                .then( foundUser => {
                // console.log(foundUser)
                // -- //
                    if (foundUser.length  === 0) {
                        res.status(500).json({ error: 'User not in database'})
                    } else {
                        res.status(200).json(foundUser[0])
                    }
                })
        })

    // - PUT - //
        // - 1 - // Update Individual User
            router.put('/:id', async(req,res) => {
            // console.log('** USERS ROUTE: users/:id PUT/')
            const { id } = req.params
            // console.log('UPDATE THIS USER: ', id)
            // console.log('UPDATE DATA: ', req.body)
            // -- //
                KNEX_BD('users').where({id}).update(req.body)
                    .then( updateResults => {
                    // console.log(updateResults)
                    // -- //
                        // Get updated player
                        KNEX_BD('users').where('id', id).first()
                            .then( updatedUser => {
                            // console.log('UPDATED USER: ', updatedUser)
                            // -- //
                                res.status(200).json({
                                    message: 'Successful Update', 
                                    user: {
                                        username: updatedUser.username,
                                        email: updatedUser.email,
                                        publicProfile: updatedUser.publicProfile,
                                    }
                                })
                            })
                            .catch( err => {
                            // console.log(err)
                            // -- //
                                res.status(500).json({ error: 'Cant get updated user from DB'})
                            })
                    })
                    .catch( err => {
                    console.log(err)
                    // -- // 
                        res.status(500).json( {error: 'Unabel to update user'})
                    })
            })

        // - 2 - // Update Individual User Privileges
            // TODO: Move to separate Admin Routing
            router.put('/privileges/:id',  async (req,res) => {
            const {id} = req.params
            console.log(id)
            console.log(req.body)
            // -- //
                KNEX_BD('users').where({id}).update(req.body)
                    .then( updateResults => {
                        res.status(200).json(updateResults)
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
            KNEX_BD('users').where('id', userID).del()
                .then( results => {
                // console.log(results)
                // -- //
                    res.status(200).json(results)
                })
                .catch( err => {
                // console.log(err)
                // -- // 
                    res.status(500).json(err)
                })
        })

// EXPORTS
module.exports = router