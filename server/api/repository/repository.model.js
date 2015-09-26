'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RepositorySchema = new Schema({
  collectedAt: Date,
  createdAt : Date,
  forksCount : Number,
  isForked : Boolean,
  isPrivate : Boolean,
  name : String,
  owner : String,
  pushedAt : Date,
  stargazersCount : Number,
  updatedAt : Date,
  url : String,
  watchersCount : Number
});

module.exports = mongoose.model('Repository', RepositorySchema, 'repository');
