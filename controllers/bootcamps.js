// @dec Get bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps " });
};

// @dec Get bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @dec Create new  bootcamp
// @route POST /api/v1/bootcamps/
// @access Public
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: "Create new bootcamp" });
};

// @dec Create new  bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update  bootcamps ${req.params.id}` });
};

// @dec Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
};
