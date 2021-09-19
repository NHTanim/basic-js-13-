
// 










// array decleare
// array position number 0 দিয়ে শুর হয় এখানে 12 এর position 0 & 50 position 2. 
var friendsAge = [12, 34, 50, 20, 40, 29,39,];
console.log(friendsAge);
// ans [12, 34, 50, 20,];

console.log(friendsAge[2]);
// ans : 50;

var sonaliAge = friendsAge[3];
console.log(sonaliAge);
// ans : 20

// update arry or add 50 change 90
friendsAge [3] = 90;
console.log(friendsAge);


// postion of array
var position = friendsAge.indexOf(29);
console.log(position);

// ans : 5;



// add element array & element বের করার জন্য হবে pop এটা last এর জন্য
// যদি প্রথমে array add করতে চাই তাহলে হবে unshift আর বের করতে হবে shift.
friendsAge.push(120);
console.log(friendsAge);


// array কতটা আছে বের করার জন্য 
console.log(friendsAge.length)











// 



