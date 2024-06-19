const { Stone } = require("../models/Stone");

//todo: replace with real service to exam description

async function getAll() {
  const stone = await Stone.find().lean();
  return stone;
}

async function getRecent() {
  const stone = await Stone.find().sort({ $natural: -1 }).limit(3).lean();
  return stone;
}

async function getById(id) {
  return Stone.findById(id).lean();
}
async function create(data, authorId) {
  //todo extract properties from view model
  const record = new Stone({
    name: data.name,
    category: data.category,
    color: data.color,
    image: data.image,
    location: data.location,
    formula: data.formula,
    description: data.description,
    author: authorId,
  });

  await record.save();
  return record;
}
async function update(id, data, userId) {
  const record = await Stone.findById(id);

  if (!record) {
    throw new Error("Record not found" + id);
  }
  if (record.author.toString() != userId) {
    throw new Error("Access denied");
  }
  //todo replace with real properties

  record.name = data.name;
  record.category = data.category;
  record.color = data.color;
  record.image = data.image;
  record.location = data.location;
  record.formula = data.formula;
  record.description = data.description;

  await record.save();
  return record;
}
//todo add function to only update likes

async function deleteById() {
  const record = await Stone.findById(id);

  if (!record) {
    throw new Error("Record not found" + id);
  }
  if (record.author.toString() != userId) {
    throw new Error("Access denied");
  }
  await Stone.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getRecent,
};
