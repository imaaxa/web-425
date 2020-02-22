/*============================================;
Title: Server-Side Communications with Node.js and Express
Author: Cory Gilliam
Date: 22 Feb 2020;
Version: 1.0.0
Modified By:
Description: Server-Side Communications with Node.js and Express
===========================================*/

// Require express
//var express = require('express');
import * as express from "express";

const app = express();

interface Composer {
  id: number,
  firstName: string,
  lastName: string
}

const composers: Composer[] = [
  { id: 1, firstName: "Johann",   lastName: "Bach" },
  { id: 2, firstName: "Wolfgang", lastName: "Mozrat" },
  { id: 3, firstName: "Ludwig",   lastName: "Beethoven" },
  { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
  { id: 5, firstName: "Frederic", lastName: "Chopin" },
];

function getComposers(): Composer[] {
  return composers;
}

function getComposerById(composerId: number): Composer {
  return composers.find(c => c.id == composerId);
}

// Routes
app.get('/api/composers', (request, response) => {
  response.json(getComposers());
});

app.get('/api/composers/:id', (request, response) => {
  response.json(getComposerById(parseInt(request.params.id)));
});

app.get('/', (request, response) => {
  console.log("Hello World.");
  response.send("Hello World");
});

// Start server
const server = app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
