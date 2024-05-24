const express = require("express");
const {
  getCourses,
  updateCourse,
  getCourse,
  addCourse,
} = require("../controllers/courses");
const router = express.Router({ mergeParams: true });

router.route("/").get(getCourses).post(addCourse);
router.route("/:id").put(updateCourse).get(getCourse);

module.exports = router;
