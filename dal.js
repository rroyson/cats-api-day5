const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))
const { map } = require('ramda')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const pkGenerator = require('./lib/build-pk')
const { append, find, reject, compose, trim, merge } = require('ramda')

//////////////////////
//      CATS
//////////////////////
const addCat = (cat, callback) => {
  // example _id -- "cat_big_time_owner_333"
  cat._id = pkGenerator('cat_', trim(cat.name) + ' ' + trim(cat.ownerId))
  add(cat, callback)
}
const getCat = (catId, callback) => get(catId, callback)
const updateCat = (updatedCat, callback) => update(updatedCat, callback)
const deleteCat = (catId, callback) => deleteDoc(catId, callback)

const listCats = (lastItem, ownerId, limit, callback) => {
  var query = {}

  if (ownerId) {
    // if ownerId then this is a filter and were not going to paginate.
    //   why?  the filter is limiting our records.  no need to paginate
    query = { selector: { ownerId }, limit }
  } else if (lastItem) {
    // They are asking to paginate.  Give them the next page of results
    query = { selector: { _id: { $gt: lastItem }, type: 'cat' }, limit }
  } else {
    // Give the first page of results.
    query = { selector: { _id: { $gt: null }, type: 'cat' }, limit }
  }

  console.log('query:', query)
  findDocs(query, callback)
}

//////////////////////
//      BREEDS
//////////////////////
const addBreed = (breed, callback) => {
  // example _id -- "breed_pixie-bob"
  breed._id = pkGenerator('breed_', trim(breed.breed))
  add(breed, callback)
}
const getBreed = (breedId, callback) => get(breedId, callback)
const updateBreed = (updatedBreed, callback) => update(updatedBreed, callback)
const deleteBreed = (breedId, callback) => deleteDoc(breedId, callback)

const listBreeds = (lastItem, limit, callback) => {
  var query = {}

  if (lastItem) {
    // They are asking to paginate.  Give them the next page of results
    query = { selector: { _id: { $gt: lastItem }, type: 'breed' }, limit }
  } else {
    // Give the first page of results.
    query = { selector: { _id: { $gt: null }, type: 'breed' }, limit }
  }

  // const query = limit
  //   ? { selector: { type: 'breed' }, limit }
  //   : { selector: { type: 'breed' } }

  findDocs(query, callback)
}

////////////////////////////
//    helper functions
////////////////////////////
// function list(options, callback) {
//   db.allDocs(options, function(err, data) {
//     if (err) callback(err)
//     callback(null, map(row => row.doc, data.rows))
//   })
// }

function add(doc, callback) {
  db.put(doc, function(err, doc) {
    if (err) callback(err)
    callback(null, doc)
  })
}

function get(id, callback) {
  db.get(id, function(err, doc) {
    if (err) callback(err)
    callback(null, doc)
  })
}

function update(doc, callback) {
  db.put(doc, function(err, doc) {
    if (err) callback(err)
    callback(null, doc)
  })
}

function deleteDoc(id, callback) {
  db
    .get(id)
    .then(function(doc) {
      return db.remove(doc)
    })
    .then(function(result) {
      callback(null, result)
    })
    .catch(function(err) {
      callback(err)
    })
}

const findDocs = (query, cb) =>
  query
    ? db.find(query).then(res => cb(null, res.docs)).catch(err => cb(err))
    : cb(null, [])

const dal = {
  addCat,
  listCats,
  getCat,
  deleteCat,
  updateCat,
  addBreed,
  getBreed,
  updateBreed,
  deleteBreed,
  listBreeds
}

module.exports = dal

// function deleteCat(id, callback) {
//   catsData = reject(c => c.id === id, catsData)
//
//   callback(null, { deleted: true })
// }
