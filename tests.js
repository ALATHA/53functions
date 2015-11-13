
// if("Bob"==="Joe"){
// 	 return "Hello";

// }else if("Joe"==="Bob"){
// 	 return "Hello";
// }
// else{
// 	 return "Hello";
// }

// test("takes a username as parameter and returns as hello if the username is Joe or Bob only say hello",function(assert){
// 	 assert.equal(hello(),"hello","Bob","Joe");

// });
test("takes a username as parameter and returns Hello",function(assert){
	assert.equal(hello_uppercase("alatha"),"Hello, ALATHA");
});


test("test that it returns helloworld",function(assert){
 	assert.equal(helloWorld(),"hello world");

 });
test("takes a username as parameter and returns Hello if the username is Bob only say hello",function(assert){
	assert.equal(hello_joe("Joe"),"Hello!");
	assert.equal(hello_joe("Bob"),"Hello!");
	assert.equal(hello_joe("Nana"),"Hello, Nana!");
});
test("takes a number as a parameter (n) and returns a list of numbers from 1 to n",function(assert){
	assert.deepEqual(number_list(10),[1,2,3,4,5,6,7,8,9,10]);
});

test("takes a number as a parameter (n) and returns the sum of numbers from 1 to n",function(assert){
	assert.deepEqual(sum_numbers(5),15);
});