const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET /gallery
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "gallery" ORDER BY "id";'

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

// PUT /gallery/like/:id
router.put('/:id', (req, res) => {
  // code here
  const id = parseInt(req.params.id)
  const likes = req.body.likes
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  pool
      .query(queryText, [id])
      .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log('ERROR:', err);
          res.sendStatus(500);
      });
  });

module.exports = router;