function mergeSortedArrays(array1, array2) {
  let newarray = [];
let i=0, j=0;

//check input
if(array1.length===0) return array2;
if(array2.length===0) return array1; 

  while (i< array1.length ,j<array2.length)
  {
    
      
      if(array1[i]<array2[j]) {
        newarray.push(array1[i]);
        i++;
        }
        else if (array1[i]===array2[j]) {
          newarray.push(array1[i]);
          i++;
          newarray.push(array2[j]);
          j++;
        }
      else {
        newarray.push(array2[j]);
        j++;
      }

   
    
  }
  if(array1[i] !== undefined) newarray.push(array1[i]);
    
  if(array2[j] !== undefined) newarray.push(array2[j]);
  return newarray;
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);