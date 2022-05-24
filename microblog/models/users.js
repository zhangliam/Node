var mongodb         = require('./db'); 
function User(user) { 
  this.name           = user.name; 
  this.password       = user.password; 
}; 
module.exports      = User; 
User.prototype.save = function save(callback) { 
// 存入 Mongodb 的文档
var user            = { 
  name: this.name, 
  password: this.password, 
}; 
mongodb.open(function(err, db) { 
  if (err) {  
    return callback(err); 
} 
// 读取 users 集合
db.collection('users', function(err, collection) { 
  if (err) { 
    mongodb.close(); 
    return callback(err); 
} 
// 为 name 属性添加索引
collection.ensureIndex('name', {unique: true}); 
// 写入 user 文档
collection.insert(user, {safe: true}, function(err, user) { 
  mongodb.close(); 
  callback(err, user); 
}); 
});