const router = require('express').Router(),
axios = require('axios')

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('')
    res.status(response.status).send(response.data)
  } catch (error) {
    res.status(error.response.status).send(error.response.data)
  }
});

module.exports = router;