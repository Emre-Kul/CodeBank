import { Mongo } from 'meteor/mongo';
export const CategoryCol = new Mongo.Collection('Category')

Meteor.CatColMethods = {
  remove : function(_id){
    CategoryCol.remove(_id);
  },
  list : function(){
    return CategoryCol.find({},{sort: {createdAt : -1}});
  },
  insert : function(name){
    CategoryCol.insert({
      name: name,
      createdAt: new Date()
    });
  },
  search : function(name,limit){
    if(name.length > 0)
      return CategoryCol.find(
        {name: 
          {
            $regex: name, $options: 'i'
          }
        }
      );
  }
}
