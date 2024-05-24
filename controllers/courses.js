const Course = require("../models/Course");
const errorHandler = require("../utils/error");
const Bootcamp = require("../models/Bootcamps");

// @dec Get courses
// @route GET /api/v1/courses
// @route GET /api/v1/bootcamps/:bootcampsId/courses
// @access Public
exports.getCourses = async (req, res, next) => {
  try {
    let query;
    if (req.params.bootcampId) {
      query = Course.find({ bootcamp: req.params.bootcampId });
    } else {
      query = Course.find().populate({
        path: "bootcamp",
        select: "name description",
      });
    }
    const courses = await query;
    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

// @dec Get course
// @route GET /api/v1/courses/:id
// @access Public

exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).populate({
      path: "bootcamp",
      select: "name description",
    });
    if (!course) {
      return next(
        errorHandler(404, `Course not found with id of ${req.params.id}`)
      );
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

// @dec Create new  course
// @route POST /api/v1/bootcamps/:bootcampId/courses
// @access private
exports.addCourse = async (req, res, next) => {
  try {
    req.body.Bootcamp = req.params.bootcampId;
    const bootcamp = await Bootcamp.findById(req.body.Bootcamp);

    if (!bootcamp) {
      return next(
        errorHandler(
          `404, Bootcamp not found with id of ${req.params.BootcampId}`
        )
      );
    }

    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

// @dec Update course
// @route PUT /api/v1/courses/:id
// @access Private
exports.updateCourse = async (req, res, next) => {
  try {
    const updateCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateCourse) {
      return next(
        errorHandler(404, `Bootcamp not found with id of ${req.params.id}`)
      );
    }
    res.status(200).json({ success: true, data: updateCourse });
  } catch (error) {
    next(error);
  }
};

// @dec Delete course
// @route DELETE /api/v1/courses/:id
// @access Private
exports.deleteCourse = async (req, res, next) => {
  try {
    //remove function ka issue solve karne ke baad Course.FindById use karenge
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return next(
        errorHandler(404, `Course not found with id of ${req.params.id}`)
      );
    }
    //course.remove(); middleware me issue hai
    res.status(200).json({ success: true, msg: "Deleted successfully..." });
  } catch (error) {
    next(error);
  }
};
