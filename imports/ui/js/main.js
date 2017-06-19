import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../html/main.html';

//pages

import './footer.js';
import './header.js';
import './calendar.js';
import './home.js';
import './codeBank.js';
import './noteBook.js';
import './category.js';

Template.main.helpers({
  welcome : function(){
    return "Welcome";
  },
});
