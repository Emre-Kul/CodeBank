import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../html/noteBook.html';
import '../../../lib/collections/noteCol.js';

import './category.js';

Template.noteBook.helpers({
  listNotes : function(){
    return Meteor.NoteColMethods.list(0,0);
  },
});
Template.noteBook.events({
  'submit #createNote': function(e){
    e.preventDefault();
    Meteor.NoteColMethods.insert($('#noteContent').val());
    $('#noteContent').val("");
  },
  'click #delete-note': function(e){
    if(confirm("Delete") == true){
      Meteor.NoteColMethods.remove(this._id);
    }
  },
  'click #bookmark-note': function(e){
    Meteor.NoteColMethods.bookmark(this._id);
  }
});
