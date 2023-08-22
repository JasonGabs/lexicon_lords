const router = require('express').Router();
const { CrossSet } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCrossSet = await CrossSet.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCrossSet);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const CrossSetData = await CrossSet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CrossSetData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(CrossSetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*router.get('/:id', withAuth, async (req, res) => {
  try {
    const CrossSetData = await CrossSet.findByPk({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CrossSetData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(CrossSetData);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/

module.exports = router;
