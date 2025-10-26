function binarysearch(arg , list){
	for(let i = 0 ; i<list.length ; i++){
		if(arg == list[i]){
			return i;
		}
	}
	return -1; 
}
function mdpp(){
	var username = prompt("entre ton nom : ");
	if(binarysearch(username , nom)==-1){
		alert("***");
		mdpp();
	}
	let motdepasse = " ";
	while(motdepasse != mdp[binarysearch(username , nom)]){
		motdepasse = prompt("entre le mdp");
	}
}
mdpp();