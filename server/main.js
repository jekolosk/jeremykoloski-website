import { Meteor } from 'meteor/meteor';
Chats = new Mongo.Collection('chats');
Meteor.startup(() => {
  // code to run on server at startup
});
