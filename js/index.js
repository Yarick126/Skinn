function main (){
  function toCamelCase(str)
  {
    let symbl = '-_';
    for(var i = 0;i<str.lenght;i++){
      for(var j =0;j<symbl.lenght;j++){
        if(str[i]===symbl[j]){
          str[i+1].toUpperCase();
          str = str.replace(str[i],'');
        }
      }
    }
    return str;
  }
  
  toCamelCase("the_stealth_warrior");
}
