 
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
	assert.equal(hello_uppercase("ALATHA"),"Hello, ALATHA");
});


test("test that it return helloworld",function(assert){
 	assert.equal(helloWorld(),"hello world");

 });
