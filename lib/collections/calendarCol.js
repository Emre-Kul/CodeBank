import { Mongo } from 'meteor/mongo';
export const CalendarCol = new Mongo.Collection('Calendar')

Meteor.CalColMethods = {
  remove : function(_id){
    CalendarCol.remove(_id);
  },
  list : function(){
    return CalendarCol.find({},{sort: {createdAt : -1}});
  },
  insert : function(title,desc,date){
    CalendarCol.insert({
      title: title,
      description: desc,
      date: date,
      createdAt: new Date()
    });
  }
}
