
// function doesNotExist(){
// 	document.getElementById('err').innerHTML="Try Again";
// }


function dohtml(){
  try{
    doesNotExist();
  }catch(err){
    let notify = document.getElementById("err");
    notify.innerHTML = err;
    notify.style.display = "block";
  }
}