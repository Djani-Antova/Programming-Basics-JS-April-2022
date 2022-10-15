function invalidNumber (input) {
    let num = Number (input[0]);
  
  if (num>200) {
    console.log("invalid");  
  } else if (num >0 && num <100) {
    console.log("invalid"); 
  } else if (num < 0) {
    console.log("invalid");  
  }

}
invalidNumber (["200"])