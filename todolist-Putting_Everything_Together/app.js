//jshint esversion:6
// 342
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');


// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});

// const itemsSchema = {
//   name: String
// };

// const Item = mongoose.model('Item', itemsSchema);

// const item1 = new Item({
//   name: 'welcome to your todolist!'
// });

// const item2 = new Item({
//   name: 'Hit the + button to add a new item.'
// });

// const item3 = new Item({
//   name: '<-- Hit this to delete an item.'
// });

// const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('sucessfully saved default items to DB.');
//   }
// })

// app.get("/", function(req, res) {


//   res.render("list", {listTitle: 'Today', newListItems: items});

// });

// app.post("/", function(req, res){

//   const item = req.body.newItem;

//   if (req.body.list === "Work") {
//     workItems.push(item);
//     res.redirect("/work");
//   } else {
//     items.push(item);
//     res.redirect("/");
//   }
// });

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Today", newListItems: workItems});
// });

// app.get("/about", function(req, res){
//   res.render("about");
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// npm i express body-parser
// nodemon app.js
// rs
// npm i mongoose
// 2--> node app.js

// File > New Tab
// 1--> mongod
// show dbs
// use todolistDB
// show collections
// db.items.find()



// 343
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');


// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});

// const itemsSchema = {
//   name: String
// };

// const Item = mongoose.model('Item', itemsSchema);

// const item1 = new Item({
//   name: 'welcome to your todolist!'
// });

// const item2 = new Item({
//   name: 'Hit the + button to add a new item.'
// });

// const item3 = new Item({
//   name: '<-- Hit this to delete an item.'
// });

// const defaultItems = [item1, item2, item3];

// app.get("/", function(req, res) {

//   Item.find({}, function(err, foundItems){

//     if (foundItems.length === 0) {
//       Item.insertMany(defaultItems, function(err){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('sucessfully saved default items to DB.');
//         }
//       });
//       res.redirect('/');
//     } else {
//       res.render("list", {listTitle: 'Today', newListItems: foundItems});
//     }
//   });

// });

// app.post("/", function(req, res){

//   const item = req.body.newItem;

//   if (req.body.list === "Work") {
//     workItems.push(item);
//     res.redirect("/work");
//   } else {
//     items.push(item);
//     res.redirect("/");
//   }
// });

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Today", newListItems: workItems});
// });

// app.get("/about", function(req, res){
//   res.render("about");
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js

// File > New Tab
// db
// db.dropDatabase()
// show dbs



// 345
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');


// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});

// const itemsSchema = {
//   name: String
// };

// const Item = mongoose.model('Item', itemsSchema);

// const item1 = new Item({
//   name: 'welcome to your todolist!'
// });

// const item2 = new Item({
//   name: 'Hit the + button to add a new item.'
// });

// const item3 = new Item({
//   name: '<-- Hit this to delete an item.'
// });

// const defaultItems = [item1, item2, item3];

// app.get("/", function(req, res) {

//   Item.find({}, function(err, foundItems){

//     if (foundItems.length === 0) {
//       Item.insertMany(defaultItems, function(err){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('sucessfully saved default items to DB.');
//         }
//       });
//       res.redirect('/');
//     } else {
//       res.render("list", {listTitle: 'Today', newListItems: foundItems});
//     }
//   });

// });

// app.post("/", function(req, res){

//   const itemName = req.body.newItem;
//   const item = new Item({
//     name: itemName
//   });

//   item.save();
//   res.redirect('/');
// });

// app.post('/delete', function(req, res){
//   const checkedItemId = req.body.checkbox;

//   Item.findByIdAndRemove(checkedItemId, function(err){
//     if (!err) {
//       console.log('successfully deleted checked item.');
//       res.redirect('/');
//     }
//   });
// });

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });

// app.get("/about", function(req, res){
//   res.render("about");
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js

// File > New Tab
// show dbs
// use todolistDB
// db.items.find()
// db.items.find()



// 346
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');


// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});

// const itemsSchema = {
//   name: String
// };

// const Item = mongoose.model('Item', itemsSchema);

// const item1 = new Item({
//   name: 'welcome to your todolist!'
// });

// const item2 = new Item({
//   name: 'Hit the + button to add a new item.'
// });

// const item3 = new Item({
//   name: '<-- Hit this to delete an item.'
// });

// const defaultItems = [item1, item2, item3];

// const listSchema = {
//   name: String,
//   items: [itemsSchema]
// };

// const List = mongoose.model('List', listSchema);

// app.get("/", function(req, res) {

//   Item.find({}, function(err, foundItems){

//     if (foundItems.length === 0) {
//       Item.insertMany(defaultItems, function(err){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('sucessfully saved default items to DB.');
//         }
//       });
//       res.redirect('/');
//     } else {
//       res.render("list", {listTitle: 'Today', newListItems: foundItems});
//     }
//   });

// });

// app.get('/:customListName', function(req, res){
//   const customListName = req.params.customListName;

//   List.findOne({name: customListName}, function(err, foundList){
//     if (!err){
//       if (!foundList){
//        // create a new list
//        const list = new List({
//         name: customListName,
//         items: defaultItems
//       });
    
//       list.save();
//       res.redirect('/' + customListName);
//       } else {
//        // show an existing list
//        res.render('list', {listTitle: foundList.name, newListItems: foundList.items});
//       }
//     }
//   });

  

// });

// app.post("/", function(req, res){

//   const itemName = req.body.newItem;
//   const item = new Item({
//     name: itemName
//   });

//   item.save();
//   res.redirect('/');
// });

// app.post('/delete', function(req, res){
//   const checkedItemId = req.body.checkbox;

//   Item.findByIdAndRemove(checkedItemId, function(err){
//     if (!err) {
//       console.log('successfully deleted checked item.');
//       res.redirect('/');
//     }
//   });
// });


// app.get("/about", function(req, res){
//   res.render("about");
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js

// File > New Tab
// db.lists.find()
// db
// show collections
// db.lists.drop()
// show collections
// show collections
// db.lists.find()



// 347
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');


// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});

// const itemsSchema = {
//   name: String
// };

// const Item = mongoose.model('Item', itemsSchema);

// const item1 = new Item({
//   name: 'welcome to your todolist!'
// });

// const item2 = new Item({
//   name: 'Hit the + button to add a new item.'
// });

// const item3 = new Item({
//   name: '<-- Hit this to delete an item.'
// });

// const defaultItems = [item1, item2, item3];

// const listSchema = {
//   name: String,
//   items: [itemsSchema]
// };

// const List = mongoose.model('List', listSchema);

// app.get("/", function(req, res) {

//   Item.find({}, function(err, foundItems){

//     if (foundItems.length === 0) {
//       Item.insertMany(defaultItems, function(err){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('sucessfully saved default items to DB.');
//         }
//       });
//       res.redirect('/');
//     } else {
//       res.render("list", {listTitle: 'Today', newListItems: foundItems});
//     }
//   });

// });

// app.get('/:customListName', function(req, res){
//   const customListName = req.params.customListName;

//   List.findOne({name: customListName}, function(err, foundList){
//     if (!err){
//       if (!foundList){
//        // create a new list
//        const list = new List({
//         name: customListName,
//         items: defaultItems
//       });
    
//       list.save();
//       res.redirect('/' + customListName);
//       } else {
//        // show an existing list
//        res.render('list', {listTitle: foundList.name, newListItems: foundList.items});
//       }
//     }
//   });

  

// });

// app.post("/", function(req, res){

//   const itemName = req.body.newItem;
//   const listName = req.body.list;
//   const item = new Item({
//     name: itemName
//   });

//   if (listName === 'Today'){
//     item.save();
//     res.redirect('/');
//   } else {
//     List.findOne({name: listName}, function(err, foundList){
//       foundList.items.push(item);
//       foundList.save();
//       res.redirect('/' + listName);
//     });
//   }
// });

// app.post('/delete', function(req, res){
//   const checkedItemId = req.body.checkbox;

//   Item.findByIdAndRemove(checkedItemId, function(err){
//     if (!err) {
//       console.log('successfully deleted checked item.');
//       res.redirect('/');
//     }
//   });
// });


// app.get("/about", function(req, res){
//   res.render("about");
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 348
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});

const itemsSchema = {
  name: String
};

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
  name: 'welcome to your todolist!'
});

const item2 = new Item({
  name: 'Hit the + button to add a new item.'
});

const item3 = new Item({
  name: '<-- Hit this to delete an item.'
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model('List', listSchema);

app.get("/", function(req, res) {

  Item.find({}, function(err, foundItems){

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log('sucessfully saved default items to DB.');
        }
      });
      res.redirect('/');
    } else {
      res.render("list", {listTitle: 'Today', newListItems: foundItems});
    }
  });

});

app.get('/:customListName', function(req, res){
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName}, function(err, foundList){
    if (!err){
      if (!foundList){
       // create a new list
       const list = new List({
        name: customListName,
        items: defaultItems
      });
    
      list.save();
      res.redirect('/' + customListName);
      } else {
       // show an existing list
       res.render('list', {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });

  

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  });

  if (listName === 'Today'){
    item.save();
    res.redirect('/');
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect('/' + listName);
    });
  }
});

app.post('/delete', function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === 'Today') {
    Item.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log('successfully deleted checked item.');
        res.redirect('/');
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if (!err) {
        res.redirect('/' + listName);
      }
    });
  }

  
});


app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

// nodemon app.js
// npm i lodash
// db.lists.drop()
// db.lists.find()