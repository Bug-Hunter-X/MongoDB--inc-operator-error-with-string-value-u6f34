```javascript
// Correct usage of $inc operator in MongoDB update
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: 1 } });
//or
let myDoc = db.collection('myCollection').findOne({_id:1});
let newCount = parseInt(myDoc.count) + 1;
db.collection('myCollection').updateOne({ _id: 1 }, { $set: {count: newCount}});
```