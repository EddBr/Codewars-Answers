function whoIsNext(names, r){
  for(i = 0; i < r; i ++){
    names.push(names[i]);
    names.push(names[i]);
  }
  i--;
  return names[i]
}
//This one doesn't work because Codewars does not allow you to use this much memory so I am unsure as to how to do this.
