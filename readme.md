# Cats API

This API manages cats and cat breeds for all cat service worldwide.

## Getting Section

Instructions on how to get a developer up and running on the cats api in a local, development environment.

> The instructions assume node >= 7x and you have access to a CouchDB installation on either your local machine or in the cloud as a DBaas, such as Cloudant.

```
$ git clone https://github.com/tripott/cats-api
$ cd cats-api
```

## Environment Variables

### **.env**

- At the root of your project, copy the **.env-sample** file as **.env** file.  Modify the following environment variables:

  - `COUCHDB_URL`
  - `COUCHDB_NAME`
  - `PORT`

For example here are example values for `COUCHDB_URL` and `COUCHDB_NAME` environment variables for an instance of CouchDB running in IBM Blue Mix's Cloudant service:

```
COUCHDB_URL=https://<KEY>:<PASSWORD>@<BASE URL TO CLOUDANT.com/
COUCHDB_NAME=cats
```

**Complete URL Example**

```
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

// would produce something such as:
// const db = new PouchDB(https://arencharlynaturousfeli7:287bb97bafee05f3d2fb7840371182d3d2534red@90629927-b1a9-4251-9b99-f76bd577tedx8-bluemix.cloudant.com/cats)

```

### Installing Dependencies and starting our API

After you have successfully provided the values for your environment variables, install dependencies, load data, load indexs, and start the api.  See scripts within the **package.json** for details:

```
$ npm install
$ npm run load
$ npm start
```

## Endpoints

- POST /cats  - provide a description of what this does...


[
doc1,
doc2,
doc3,
doc4,
doc5,
doc6,
doc7,
doc8,
doc9,
doc10,
doc1,
doc2,
doc3,
doc4,
doc5,
doc6,
doc7,
doc8,
doc9,
doc10,
doc1,
doc2,
doc3,
doc4,
doc5,
doc6,
doc7,
doc8,
doc9,
doc10,
doc1,
doc2,
doc3,
doc4,
doc5,
doc6,
doc7,
doc8,
doc9,
doc10,
doc1,
doc2,
doc3,
doc4,
doc5,
doc6,
doc7,
doc8,
doc9,
doc10,

]
