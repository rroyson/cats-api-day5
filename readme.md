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

For example here is an example of a value for the `COUCHDB_URL` environment variable for an instance of CouchDB running in Cloudant.

```
COUCHDB_URL=https://<DB KEY>:<SECRET>@<BASE URL TO CLOUDANT.com/
```

### Installing Dependencies and starting our API

After you have successfully provided the values for your environment variables, install dependencies and start the api:

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
