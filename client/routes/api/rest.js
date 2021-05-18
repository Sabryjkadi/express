const { Router } = require('express')
const BucketListItem = require('../../../database/schema.js')

const router = Router()


router.get('/', async (req, res) => {
    try {
        const bucketListItems = await BucketListItem.find()
        res.status(200).json(bucketListItems)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/remove', async (req, res) => {
    var deleteItem = req.body.description
    await BucketListItem.deleteOne( { "description" : deleteItem} );
    res.status(200).send("ok");

})


router.post('/', async (req, res) => {
    const newBucketListItem = new BucketListItem(req.body)
    try {
    await newBucketListItem.save()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
         await BucketListItem.findByIdAndUpdate(id, req.body)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await BucketListItem.findByIdAndDelete(id)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
