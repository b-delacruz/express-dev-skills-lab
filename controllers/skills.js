import { Skill } from '../models/skills.js'


function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index',{
      skills: skills
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req,res) {
  res.render('skills/new')
}

function create(req,res) {
  Skill.create(req.body)
  .then((skill) => {
    res.redirect('/thanks')
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}
 




function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
}