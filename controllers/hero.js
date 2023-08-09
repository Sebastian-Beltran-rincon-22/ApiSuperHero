const Hero = require ('../models/hero')


const heroControllers ={
// Create hero
create: async (req,res) => {
  try {
    const {namehero,imgHero, done} = req.body //"desestructuracion de datos"
    const lastHero = await Hero.findOne().sort({heroId: -1})// "manejo de ID de manera ascente por ID unico"
    const newHeroId = lastHero ? lastHero.heroId +1 : 1

    const newHero = new Hero ({
      heroId: newHeroId,
      namehero : namehero,
      imgHero : imgHero,
      done:done
    })
    await newHero.save()
    res.status(201).json(newHero)

  }catch (error){
    return res.status(409).json ({msg:error.message})
  }
  },
// Get
get: async (req,res) => {
  try {
      const heros = await Hero.find({})

      res.status(200).json(heros.reverse())
    } catch (error) {
      return res.status(204).json({msg:error.message})
    }
  },
// Get for ID
getById: async (req,res) => {
    try {
        const hero = await Hero.findOne({heroId: req.params.heroId})

        res.status(202).json(hero)

    } catch (error) {
      return res.status(204).json({msg:error.message})
    }
  },
// update hero
update: async (req,res) =>{
  try{
    const {namehero, imgHero,done} = req.body
    const heroId = req.params

    const updateHero = await Hero.findOneAndUpdate(heroId,{
      namehero: namehero,
      imgHero : imgHero,
      done:done
    })
    res.status(201).json(updateHero)
  }catch(error){
    console.error(error)
    return res.status(304).json({msg:error.message})
  }
},
// Delete Hero
delete: async (req,res)=>{
  try {
    const {heroId} = req.params
    await Hero.findOneAndDelete({heroId})

      res.json({msg:'Deleted'})
  } catch (err) {
      console.error(err)
      return res.status(406).json({msg:err.message})
  }
},
}

module.exports = heroControllers
