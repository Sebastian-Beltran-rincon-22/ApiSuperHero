const express = require(`express`)
const router = express.Router()
const heroControllers = require('../controllers/hero')

router.get(`/`, heroControllers.get)
router.get('/:heroId', heroControllers.getById)
router.post('/create', heroControllers.create)
router.patch('/update/:heroId', heroControllers.update)
router.delete('/delete/:heroId',heroControllers.delete)
module.exports = router
