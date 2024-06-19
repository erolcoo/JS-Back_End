const { Router } = require("express");
const { getRecent } = require("../services/stone");

//todo: replace wit real router according to exam description
const homeRouter = Router();

homeRouter.get("/", async (req, res) => {
  const stones = await getRecent();
  res.render("home", { stones });
});

module.exports = { homeRouter };
