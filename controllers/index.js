
function index(req, res) {
 
    res.render('/index.ejs',{
      time: req.time
    })
  }
  

  export {
    index,
  }