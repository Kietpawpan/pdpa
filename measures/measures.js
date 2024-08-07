/* Copyright (c) 2024 by Monte Kietpawpan
 * measures.js | v1.0.3 August 1, 2024 
 * MIT License */

function enc(){ /* crypto-js 4.2.0 */
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
if(decrypted==""){document.getElementById('3').innerHTML = "<font color='red'><i class='fa fa-exclamation-triangle '></i> Incorrect key or encrypted data.</font>";document.getElementById('data3').innerHTML="";}
else{document.getElementById('data3').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
document.getElementById('data3').style.height = document.getElementById('data3').scrollHeight + 'px';
document.getElementById('3').innerHTML ="<font color='blue'><i class='fa fa-check-square '></i> Successfully decrypted.</font>";}
}

function hash(){
	let data = document.getElementById("data5").value;
	let hdata = sha3_512(data);
	document.getElementById("data4").value = hdata.toString();
	document.getElementById("data4").style.height = document.getElementById('data4').scrollHeight + 'px';
}

function setHeight1(){
	document.getElementById('data1').style.height = document.getElementById('data1').scrollHeight + 'px';
}
	

function setHeight2(){
	document.getElementById('data2').style.height = document.getElementById('data2').scrollHeight + 'px';
}

function setHeight3(){
	document.getElementById('data3').style.height = document.getElementById('data3').scrollHeight + 'px';
}

function setHeight4(){
	document.getElementById('data4').style.height = document.getElementById('data4').scrollHeight + 'px';
}

function setHeight5(){
	document.getElementById('data5').style.height = document.getElementById('data5').scrollHeight + 'px';
}



function setHeighk1(){
	document.getElementById('key1').style.height = document.getElementById('key1').scrollHeight + 'px';
}

function setHeighk2(){
	document.getElementById('key2').style.height = document.getElementById('key2').scrollHeight + 'px';
}

function setHeightt(){
	document.getElementById('t1').style.height = document.getElementById('t1').scrollHeight + 'px';
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
  setTimeout(function() {
  popup.classList.toggle("hide");}, 1200);
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
 setTimeout(function() {
             popup.classList.toggle("hide");}, 1200);

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
  setTimeout(function() {
  popup.classList.toggle("hide");}, 1200);

}

function copyPK(){
  const element = document.querySelector("#key1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("r6");
  popup.classList.toggle("show");
  setTimeout(function() {
  popup.classList.toggle("hide");}, 1200);

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
 setTimeout(function() {
             popup.classList.toggle("hide");}, 1200);

}

function clearAll(){
location.reload();
/*
document.getElementById('key1').value ="";
document.getElementById('key2').value ="";
document.getElementById('3').innerHTML ="";
document.getElementById('data1').value ="";
document.getElementById('t1').value ="";
document.getElementById('data2').value ="";
document.getElementById('data3').value ="";
document.getElementById('data4').value ="";
document.getElementById('data1').value ="";
*/
}


function clearHash(){
document.getElementById('data5').value ="";
document.getElementById('data4').value ="";
}

function clearGuid(){
document.getElementById('data6').value ="";
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

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

