require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))

const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db
  .createIndex({ index: { fields: ['type'] } })
  .then(() => {
    return db.find({ selector: { type: 'cat' } })
  })
  .then(cats => {
    console.log('Created an index on the type field.')
    console.log('Here are the cats:')
    console.log(JSON.stringify(cats, null, 2))
  })
  .catch(err => console.log(err))



db
  .createIndex({ index: { fields: ['name'] } })
  .then(() => {
    return db.find({ selector: { name: { $gte: 'Jinx' } } })
  })
  .then(cats => {
    console.log('Created an index on the name field.')
    console.log('Here are the cats:')
    console.log(JSON.stringify(cats, null, 2))
  })
  .catch(err => console.log(err))

// fat cats
const weightCheck = 10
db
  .createIndex({ index: { fields: ['weightLbs'] } })
  .then(() => {
    return db.find({ selector: { weightLbs: { $gte: weightCheck } } })
  })
  .then(cats => {
    console.log('Created an index on the weightLbs field.')
    console.log('Here are the FAT cats:')
    console.log(JSON.stringify(cats, null, 2))
  })
  .catch(err => console.log(err))




const searchCriteria = 'owner_222'
db
  .createIndex({ index: { fields: ['ownerId'] } })
  .then(() => {
    return db.find({ selector: { ownerId: searchCriteria } })
  })
  .then(cats => {
    console.log('Created an index on the ownerId field.')
    console.log('Here are the cats for owner: ', searchCriteria)
    console.log(JSON.stringify(cats, null, 2))
  })
  .catch(err => console.log(err))
