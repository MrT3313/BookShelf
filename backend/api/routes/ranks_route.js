// IMPORTS
const express = require('express')
const KNEX_DB = require('../../data/dbConfig.js')

// MODELS 
const RANKS_MODEL = require('../models/ranks_model.js')

// ROUTER
const router = express.Router()

// __MAIN__
    // - GET - // 
    // - 1 - // GET ALL RANKS
    router.get('/all', async(req,res) => {
        RANKS_MODEL.getAll()
            .then( data => {
                console.log(data.rows)
                res.status(200).json(data.rows)
            })
            .catch(err => {
                console.log('WERE HERE')
                res.status(500).json(err)
            })
    })
    // - 2 - // GET SPECIFIC RANK
    router.get('/:id', async(req,res) => {
    const {id} = req.params
    console.log('here we are')
    console.log(id)
    // -- //
        RANKS_MODEL.getRank(id)
            .then( singleRank => {
            // console.log(singleRank.rows[0])
                res.status(200).json(singleRank.rows[0])
            })
            .catch( err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })
    
    // - 3 - // GET RANKS FOR SPECIFIC BOOK
    router.get('/singleBook/:bookID', async(req,res) => {
    const {bookID} = req.params
    console.log(bookID)
    // -- //
        RANKS_MODEL.getRanks_by_bookID(bookID)
            .then( singleBookRanks => {
            // console.log(singleRank.rows)
            // -- //
                res.status(200).json(singleBookRanks.rows)
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })

    // - 4 - // GET ALL RANKS FOR SPECIFIC USER
    router.get('/singleUser/:userID', async(req,res) => {
    const {userID} = req.params
    // -- //
        RANKS_MODEL.getRanks_by_userID(userID)
            .then( singleUserRanks => {
            // console.log(singleUserRanks.rows)
            // -- //
                res.status(200).json(singleUserRanks.rows)
            })
            .catch( err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })

    // - 5 - // get RANK for specific log
    router.get('/singleLog/:logID', async(req,res) => {
    const {logID} = req.params
    // -- //
        RANKS_MODEL.getRank_by_logID(logID)
            .then( results => {
            console.log(results.rows[0])
            // -- //
                res.status(200).json(results.rows[0])
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })

    // - POST - //
        /* ACCEPTED SHAPE
            {
                "userID"    :   INTEGER [fk],
                "bookID"    :   INTEGER [fk],
                "logID"     :   INTEGER [fk],
                "rank"      :   INTEGER
            } 
        */
    router.post('/', async(req,res) => {
        RANKS_MODEL.logRank(req.body)
            .then( results => {
            // console.log(results.rows)
            // -- //
                res.status(200).json(results.rows)
            })
            .catch(err => {
            // console.log(err)
            // -- // 
                res.status(500).json(err)
            })
    })

    // - PUT - // 
        /* ACCEPTED SHAPE
            {
                "userID"    :   INTEGER [fk],
                "bookID"    :   INTEGER [fk],
                "logID"     :   INTEGER [fk],
                "rank"      :   INTEGER
            } 
        */
    router.put('/:rankID', async(req,res) => {
    const {rankID} = req.params
    // -- //
        RANKS_MODEL.updateRank(rankID, req.body)
            .then(results => {
            // console.log(results.rows[0])
            // -- //
                res.status(200).json(results.rows[0])
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })
    
    // - DEL - //
    router.delete('/:id', async(req,res) => {
    const {id} = req.params
    // -- //
        RANKS_MODEL.deleteRank(id)
        .then( results => {
            // console.log(results.rows)
            // -- //
                res.status(200).json(results.rows)
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })



// EXPORTS
module.exports = router