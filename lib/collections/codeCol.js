import { Mongo } from 'meteor/mongo';
export const CodeCol = new Mongo.Collection('Code');


Meteor.CodeColMethods = {
  remove : function(_id){
    CodeCol.remove(_id);
  },
  list : function(){
    return CodeCol.find({},{sort: {createdAt : -1}});
  },
  insert : function(name,content,tags){
    CodeCol.insert({
      name: name,
      content: content,
      tags : tags,
      createdAt: new Date()
    });
  },
  getById : function(id){
    return CodeCol.findOne({_id : id});
  }
}