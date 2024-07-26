/* Copyright (c) 2024 by Monte Kietpawpan
 * measures.js | v1.0.1 July 26, 2024 
 * MIT License */

function enc(){
var message = document.getElementById('data1').value;
var key = document.getElementById('key1').value;
var encrypted = CryptoJS.AES.encrypt(message, key);
document.getElementById('t1').value = encrypted;
document.getElementById('t1').style.height = document.getElementById('t1').scrollHeight + 'px';
}

function dec(){
var encrypted = document.getElementById('data2').value;
var key = document.getElementById('key2').value;
var decrypted = CryptoJS.AES.decrypt(encrypted, key);
if(decrypted==""){document.getElementById('3').innerHTML = "<b>Decryption Error:</b><font color='red'> Incorrect key or encrypted data.</font>";document.getElementById('data3').innerHTML="";}
else{document.getElementById('data3').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
document.getElementById('data3').style.height = document.getElementById('data3').scrollHeight + 'px';
document.getElementById('3').innerHTML ="<font color='blue'>Successfully decrypted.</font>";}
}

function hash(){
	let data = document.getElementById("data5").value;
	let hdata = sha3_512(data);
	document.getElementById("data4").value = hdata.toString();
	document.getElementById("data4").style.height = document.getElementById('data4').scrollHeight + 'px';
}


function setHeight(){
	for(let i=1;i<6;i++){
	document.getElementById('data' + i).style.height = document.getElementById('data' + i).scrollHeight + 'px';}
}

function copy1(){
  const element = document.querySelector("#t1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("r2");
  popup.classList.toggle("show");
}
	
function copy2(){
  const element = document.querySelector("#data4");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("r3");
  popup.classList.toggle("show");
}

function copy3(){
  const element = document.querySelector("#data3");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("r4");
  popup.classList.toggle("show");
}

function copyGuid(){
  const element = document.querySelector("#data6");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("r5");
  popup.classList.toggle("show");
}

function clearAll(){
document.getElementById('key1').value ="";
document.getElementById('key2').value ="";
document.getElementById('3').innerHTML ="";
document.getElementById('data1').value ="";
document.getElementById('t1').value ="";
document.getElementById('data2').value ="";
document.getElementById('data3').value ="";
document.getElementById('data4').value ="";
var popup = document.getElementById("r2");
var popup2 = document.getElementById("r4");
popup.classList.toggle("hide");
popup2.classList.toggle("hide");
}

function clearHash(){
document.getElementById('data5').value ="";
document.getElementById('data4').value ="";
var popup = document.getElementById("r3");
popup.classList.toggle("hide");
}

function clearGuid(){
document.getElementById('data6').value ="";
var popup = document.getElementById("r5");
popup.classList.toggle("hide");
}



function guid(){
	function uuidv4() {
    	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    	.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    	});
	}
	const random_uuid = uuidv4();
	document.getElementById('data6').innerHTML = random_uuid;
}

