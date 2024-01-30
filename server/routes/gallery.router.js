const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const id = parseInt(req.params.id)
  const likes = req.body;
  const queryText = `UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2;`;
  pool
      .query(queryText, [imageData.likes, id])
      .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log('ERROR:', err);
          res.sendStatus(500);
      });
  });

// GET /gallery
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "gallery";'

  pool
    .query(dbQuery)
    .then((result) => {
      console.log('GET Result', result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.send(500);
    });
});

module.exports = router;