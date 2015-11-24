
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
test("takes a string parameter and returns the length of the supplied parameter",function(assert){
	assert.equal(length("nana"), 4);
});
test("takes a string parameter and returns the supplied parameter in uppercase",function(assert){
	assert.equal(upper("nana"),"NANA");
});
test("takes a string parameter and returns the reversed string parameter",function(assert){
	assert.equal(reverse("nana"),"anan");
});
 test("takes a number as parameter  and returns a list of hello world entries equal to the number supplied",function(assert){ 	
 	assert.equal(Array("hello world"),"hello world");
});
 test("given a list of numbers returns the highest and lowest numbers in the list",function(assert){
 	assert.equal(high_low([1,2,3,4,5,6,7,8,9,10],10,1));
 });
 test("takes a sentence as a parameter and returns the number of words in the sentence",function(assert){
 	assert.equal(count_words("I love Alatha"),13);
 });
 test("takes a sentence as a parameter and returns the sum of the length of words in the sentence",function(assert){
 	assert.equal(sum_word_len("nana loves alatha"),17);
 });
 test("takes a sentence as a parameter and returns the longest word in the sentence and the length of the word",function(assert){
	assert.equal(longest_word("alatha and nana"),6);
});
