require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {

  res.send("Backend online!");

});

/* PLAYER */

app.get(
  "/player/:tag",

  async (req, res) => {

    try {

      const tag =
        req.params.tag
          .replace("#", "");

      const response =
        await fetch(

          `https://api.brawlstars.com/v1/players/%23${tag}`,

          {

            headers: {

              Authorization:
                `Bearer ${process.env.BRAWL_API_KEY}`

            }

          }

        );

      const data =
        await response.json();

      res.json(data);

    } catch {

      res.status(500).json({

        error:
          "Error when searching the player"

      });

    }

  }
);

/* BATTLELOG */
app.get(
  "/battlelog/:tag",

  async (req, res) => {

    try {

      const tag =
        req.params.tag
          .replace("#", "");

      const response =
        await fetch(

`https://api.brawlstars.com/v1/players/%23${tag}/battlelog`,

        {

          headers: {

            Authorization:
              `Bearer ${process.env.BRAWL_API_KEY}`

          }

        }

      );

      const data =
        await response.json();

      res.json(data);

    } catch {

      res.status(500).json({

        error:
          "Battlelog failed"

      });

    }

  }
);

/* CLUB */

app.get(
  "/club/:tag",

  async (req, res) => {

    try {

      const tag =
        req.params.tag
          .replace("#", "");

      const response =
        await fetch(

          `https://api.brawlstars.com/v1/clubs/%23${tag}`,

          {

            headers: {

              Authorization:
                `Bearer ${process.env.BRAWL_API_KEY}`

            }

          }

        );

      const data =
        await response.json();

      res.json(data);

    } catch {

      res.status(500).json({

        error:
          "Error when searching the club"

      });

    }

  }
);

app.listen(
  process.env.PORT || 3000
);
