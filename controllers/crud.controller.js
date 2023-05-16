const get = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const post = (model) => async (req, res) => {
  try {
    const items = await model.create(req.body);
    return res.status(201).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const items = await model.findById(req.params.id).lean().exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const patch = (model) => async (req, res) => {
  try {
    const items = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteo = (model) => async (req, res) => {
  try {
    const items = await model.findByIdAndDelete(req.params.id).lean().exec();
    return res.send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = (model) => {
  return {
    get: get(model),
    post: post(model),
    getOne: getOne(model),
    patch: patch(model),
    delete: deleteo(model),
  };
};
