function comp(array1, array2){
  //your code here
  for (i = 0; i <= array2.length; i++){
      array1[i]
      for (j = 0; ;j++){
        if (array1[i] == array2[j]){
            return true;
        }
        else if (j == array2.length && array2[j] != array2[array2.length-1]){
          return false;
        }
        else {
        continue;
        }
      }
  }
}
