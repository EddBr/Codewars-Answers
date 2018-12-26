function menFromBoys(arr){
  var odd = [];
  var even = [];
  var inOrder = [];
  var x = 0;
  var y = 0;
  for (i = 0; i < arr.length; i++){ //Splits odd from even
      if (arr[i] % 2 == 0 || arr[i] == 0){
        odd[x] = arr[i];
        x++;
      }
      else{
        odd[y] = arr[i]; 
      }
  }
  
  for(j = 0; j < odd.length; j++){  //Puts the odd numbers in order
  
  }
  
  for(p = 0; p < even.length; p++){  //Puts the even numbers in order
  
  }
  //inOrder += odd;
  //inOrder += even;
  //return inOrder;
  return even;
}
