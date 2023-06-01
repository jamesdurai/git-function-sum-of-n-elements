let arry =[1,2,3,4,5,6]
function calculatesum(arry){
  var total=0;
  var count=0;
  for(i=0; i<arry.length;i++){

    total += arry[i];
    count++;
  }

  var average =total/count

  return {
    sum: total,
    average: average
  };
  

}
document.write(calculatesum(arry).sum);
document.write(" <br> ")
document.write(calculatesum(arry).average);