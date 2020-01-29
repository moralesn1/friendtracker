const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");

router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const profiles = await Profile.find(searchOptions);
    res.render("profiles/index", {
      profiles: profiles,
      searchOptions: req.query
    });
  } catch {
    res.redirect("/");
  }
});

router.get("/new", (req, res) => {
  res.render("profiles/new", { profile: new Profile() });
});

router.post("/", async (req, res) => {
  const profile = new Profile({
    name: req.body.name
  });
  try {
    const newProfile = await profile.save();
    res.redirect(`profiles`);
  } catch {
    res.render("profiles/new", {
      profile: profile,
      errorMessage: "Error creating Profile"
    });
  }
});

module.exports = router;
