import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
export const NoteCol = new Mongo.Collection('Note');

Meteor.NoteColMethods = {
  bookmark : function(_id){
    var value = !NoteCol.findOne(_id).bookmark;

    NoteCol.update(
       {_id:_id},
        {
         $set:
         {
           bookmark: value
          }
        }
      );
  },
  insert : function(note){
    NoteCol.insert({
      note : note,
      bookmark : false,
      createdAt : new Date()
    });
  },
  remove : function(_id){
    NoteCol.remove(_id);
  },
  list : function(start,count){
      return NoteCol.find({} , { sort : {bookmark: -1,createdAt : -1}});
  }
};
