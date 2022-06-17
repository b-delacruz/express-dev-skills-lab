import { Skill } from '../models/skills.js'


function index(req, res) {
  console.log(req.time) 
  console.log(req.muffin)
  Skill.find({})
  .then(skills => {
    res.render('skills/index',{
      skills: skills,
      time: req.time
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

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
}