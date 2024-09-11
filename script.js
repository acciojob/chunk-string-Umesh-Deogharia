function stringChop(str, size) {
  // your code here
	let ans = [];

	if (str === null) {
		return [];
	}
	
	while(str.length>0){
		ans.push( str.slice(0,size));
    str = str.slice(size)  
    
  }
  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
