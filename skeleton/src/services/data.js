const { Data } = require("../models/Data");

//todo: replace with real service to exam description

async function getAll() {
  return Data.find().lean();
}
async function getById(id) {
  return Data.findById(id).lean();
}
async function create(data, authorId) {
  //todo extract properties from view model
  const record = new Data({
    prop: data.prop,
    author: authorId,
  });

  await record.save();
  return record;
}
async function update(id, data, userId) {
  const record = await Data.findById(id);
  if (!record) {
    throw new ReferenceError("Record not found" + id);
  }
  if (record.author.toString() != userId) {
    throw new Error("Access denied");
  }
  //todo replace with real properties
  record.prop = data.prop;
  await record.save();
  return record;
}
async function deleteById() {
  const record = await Data.findById(id);
  if (!record) {
    throw new ReferenceError("Record not found" + id);
  }
  if (record.author.toString() != userId) {
    throw new Error("Access denied");
  }
  await Data.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
