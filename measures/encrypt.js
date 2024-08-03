/* Copyright (c) 2024 by Monte Kietpawpan
 * encrypt.js | v1.0.3 August 3, 2024 
 * MIT License */


function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
}

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
if(decrypted==""){document.getElementById('3').innerHTML = "<center><font color='red'><i class='fa fa-exclamation-triangle '></i> Incorrect!</font></center>";document.getElementById('data3').innerHTML="";}
else{document.getElementById('data3').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
document.getElementById('data3').style.height = document.getElementById('data3').scrollHeight + 'px';
document.getElementById('3').innerHTML ="<center><font color='RoyalBlue'><i class='fa fa-check-square '></i> Decrypted!</font></center>";}
}

function hash(){
	let data = document.getElementById("data5").value;
	let hdata = sha3_512(data);
	document.getElementById("data4").value = hdata.toString();
	document.getElementById("data4").style.height = document.getElementById('data4').scrollHeight + 'px';
}



function copy1(){
  const element = document.querySelector("#t1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  var popup = document.getElementById("c2");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy1()'></i>";}, 1200);
 }
	
function copy2(){
  const element = document.querySelector("#data4");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  var popup = document.getElementById("c4");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy2()'></i>";}, 1200);

}

function copy3(){
  const element = document.querySelector("#data3");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  document.getElementById("3").innerHTML="";
  var popup = document.getElementById("c3");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy3()'></i>";}, 1200);

}

function copyPK(){
  const element = document.querySelector("#key1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("c1");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copyPK()'></i>";}, 1200);
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

