const errHandle = (fn) => (req, res, next
) => {
  Promise.resolve(fn(req, res, next)).catch(error => {
    console.log(error)
    res.status(500).send({
      status: 500,
      message: error.message
    })
  });
};


module.exports = {
  errHandle,
};
