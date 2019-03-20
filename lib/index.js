// Initial Codes ...
/*... *160*1# ==> send ...*/
/*... *160*2# ==> receive ...*/
/*... *160*3#  ==> deposit ...*/
/*... *160*4# ==> withDraw ...*/

(function($){

const map = new WeakMap();const internal = function (object){if(!map.has(object))map.set(object, {});return map.get(object);};

class BankAccounts {
	constructor(Address,owner){
			internal(this).Address =  String(Address) || "NoAddress";
			internal(this).owner = String(owner) || "NoName";
		
		internal(this).callPoliceService = function(address, name){
			// if(this.owner == name ) {
				return new Promise((resolve,reject)=>{
					// Call the right [PS]/police station
					// console.log(this.getDetails("all"));
					function checkNearestPoliceStation(){
						// if(this.Address == address){
							// Find the [PS] in that region/address from our [DB]
							function PSAddressWithinThisRegion(){
								return new Promise((res,rej)=>{
									// DB functions for retrieving data from our Database
									let dataFromDB = "{}" // data we need, PhoneNumber etc
									res(dataFromDB);
								})
							}
							// Then (data)
							// Pass through, Send SMS and then Call
							function passTheCallThrough(){
								// First send the address and names of caller or [victim]
								function sendSMS(){
									return new Promise(res=>{
										let smsAPI = "" //Assuming we have the sms api already;
										smsAPI.send("1",{
											to: data.PhoneNumber,
											body : `Hello, my name is ${data.name} locating at ${data.address}, I need emergency Intervetion please, \n `,
											attachments : [`${data.profilePic}`]
										});
										res(data.PhoneNumber);
									})
								}
								// Then (data)
								// and call the landLine of that [PS] 
								function call() {

									// Note: if the victim is using our app, we can directly call the [PS] using our service for calling
									// Else. we're calling the the [PS] phone number

									let callAPI = ""//Assuming we have the sms api already;
									callAPI.call(`${data}`)
								}
							}
						return resolve(`Calling...`)
						/*}else {
							let callAPI = ""
							// Find the general Phone number from the DB
							function findGeneralPS(){
								return new Promise(res=>{
									let data = "" //Data from sever from the General PS
									let smsAPI = "" //Assuming we have the sms api already;
									// Let them know about the caller and the direction
										smsAPI.send("1",{
											to: data.PhoneNumber,
											body : `Hello, my name is ${data.name} locating at ${data.address}, i can't go through the Police Station on the above address but i need emergency Intervetion please, \n `,
											attachments : [`${data.profilePic}`]
										});
									res(data)
								})
							}
							// Then (data)
							function call(){
								// Call the general PS Number
								callAPI.call(`${data.PhoneNumber}`);
							}
						return resolve(`Calling General Line...`)
						}*/
					} checkNearestPoliceStation();
				}) 
			// }
		}

		internal(this).alertPolice = function(address, name){
			if(this.owner == name ){
				return new Promise((resolve)=>{
					if(this.Address == address ){
						// Find the [PS] in that region/address from our [DB]
						function PSAddressWithinThisRegion(){
							return new Promise((res,rej)=>{
								// DB functions for retrieving data from our Database
								let dataFromDB = "{}" // data we need, PhoneNumber etc
								res(dataFromDB);
							})
						}
						function sendSMSAlert(){
							return new Promise(res=>{
								res((()=>{
									let smsAPI = "" //Assuming we have the sms api already;
									smsAPI.send("1",{
										to: data.PhoneNumber,
										body : `Hello, my name is ${data.name} locating at ${data.address}, There's an Emergency Issue Happening Here Please \n `,
										attachments : [`${data.profilePic}`]
									});
								})());
							})
						}
					return resolve(`SUCCESS`);
					}else{
						// Get GNPS data from database
						function GNPSdata() {
							return new Promise(res=>{
								let dataFromDB = "{}"; // Data from DB
								res(dataFromDB);
							})
						}
						// Then (data)
						// Alert general PS
						function sendSMSAlertToGNPS(){					
							return new Promise(res=>{
								res((()=>{
									let smsAPI = "" //Assuming we have the sms api already;
									smsAPI.send("1",{
										to: data.PhoneNumber,
										body : `Hello, my name is ${data.name} locating at ${data.address}, There's an Emergency Issue Happening Here Please \n `,
										attachments : [`${data.profilePic}`]
									});
								})());
							})
						}
					return resolve(`General Alerted Successfully`);
					}
				})
			}	
		}
		
		internal(this).getAddress=function(code){
				return new Promise((resolve)=>{	
					if(code == "*131#"){
				 return resolve(`Hello ${this.owner}, your Address is ${this.Address}  \n`);
				}
			})
		}
		internal(this).getName=function(code){
				return new Promise((resolve)=>{	
					if(code == "*132#"){
				 return resolve(`Hello , your name is ${this.owner}  \n`);
				}
			})
		}
		internal(this).getDetails=function(code){
				return new Promise((resolve)=>{	
					if(code == "all"){
				 return resolve((()=>[`${this.owner}`,`${this.Address}`])());
				}
			})
		}
	}
	newAccount(initialAddress,name){		
		internal(this).Address = initialAddress;
		internal(this).owner = name;

	}
	code(code,address,name){
		if(code == "*160*1#"){
			return internal(this).callPoliceService(address,name)
		}
		if(code == "*160*2#"){
			return internal(this).alertPolice(address,name)
		}
		if(code == "*160*3#"){
			return internal(this).deposit(address)
		}
		if(code == "*160*4#"){
			return internal(this).withDraw(address)
		}
		if(code == "*131#"){
			return internal(this).getAddress(code)
		}
		if(code == "*132#"){
			return internal(this).getName(code) 
		}
		if(code == "all"){
			return internal(this).getDetails(code) 
		}
	}
}

function BankAccount (){return new BankAccounts()}if (typeof define === 'function' && define.amd) {define(function () {return BankAccount})} 
else if (typeof module === 'object' && module.exports) {
	module.exports = BankAccount;
} else {$.BankAccount = BankAccount}

})(this);


