function rot13(str) { // LBH QVQ VG!
  var result = '';
  var dcod = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
   var cod = 'nopqrstuvwxyzabcdefghijklm'.toUpperCase().split('');
 
  for (var i=0;i<str.length; i++) {
    if (dcod.indexOf(str[i]) != -1 ) {
    result += dcod[cod.indexOf(str[i])];}
    else {
      result += str[i];
    }
  }
  
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
