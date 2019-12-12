var bt = document.getElementById("bt");
var loading = document.getElementById("loading");
var f = document.getElementById("upload_file");
var ca = document.getElementById("Caplan");
var cpa = document.getElementById("Cpaction");
var cpf = document.getElementById("Cpfamily");
var da = document.getElementById("Daplan");
var dpa = document.getElementById("Dpaction");
var dpf = document.getElementById("Dpfamily");
var resultB = document.getElementById("result");

function createCTable() {
	var rTxt = "<h4><b>CNN</b> model prediction result</h4><br>";
	var tableH = "<table><thead><tr id='rtr'><td>SMILES Value</td><td>Receptor & Action Type</td><td>Action Type</td><td>Receptor Type</td></tr></thead><tbody id='resultTable'></tbody></table>";
	resultB.innerHTML = rTxt + tableH;
	
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_smiles.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};

	var x = result.split("|");
	var xl = x.length;

	var table = document.getElementById("resultTable");
	
	for(var i = 0; i<x.length; i++){

		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		cell1.setAttribute("id","rt["+i+"][0]");
		cell2.setAttribute("id","rt["+i+"][1]");
		cell3.setAttribute("id","rt["+i+"][2]");
		cell4.setAttribute("id","rt["+i+"][3]");

		cell1.innerHTML = x[i];
	}
}

function createDTable() {
	var rTxt = "<h5><b>DMLP</b> model prediction result</h5>";
	var tableH = "<table><thead><tr><td>SMILES Value</td><td>Receptor & Action Type</td><td>Action Type</td><td>Receptor Type</td></tr></thead><tbody id='resultTable'></tbody></table>";
	resultB.innerHTML = rTxt + tableH;
	
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_smiles.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};

	var x = result.split("|");
	var xl = x.length;

	var sv = x.slice(0,xl);

	var table = document.getElementById("resultTable");
	
	for(var i = 0; i<sv.length; i++){

		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		cell1.setAttribute("id","rt["+i+"][0]");
		cell2.setAttribute("id","rt["+i+"][1]");
		cell3.setAttribute("id","rt["+i+"][2]");
		cell4.setAttribute("id","rt["+i+"][3]");

		cell1.innerHTML = sv[i];
	}
}

function LoadFile() {
	var file = new FormData();
	file.append('upload_file',f.files[0]); //document.getElementById("upload_file").files[0]
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "./upload.php", false);
	xmlhttp.send(file);
}

function LoadCAFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_ca.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};
	
	var x = result.split("|");
	var xl = x.length;
	var ap = x.slice(0,xl);
	
	for(var i = 0; i<ap.length; i++){
		var cell2 = document.getElementById("rt["+i+"][1]");
		cell2.innerHTML = ap[i];
	}
}

function LoadCPAFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_cpa.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};

	var x = result.split("|");
	var xl = x.length;
	var ac = x.slice(0,xl);
	
	for(var i = 0; i<ac.length; i++){
		var cell2 = document.getElementById("rt["+i+"][2]");
		cell2.innerHTML = ac[i];
	}
}

function LoadCPFFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_cpf.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};

	var x = result.split("|");
	var xl = x.length;
	var re = x.slice(0,xl);
	
	for(var i = 0; i<re.length; i++){
		var cell3 = document.getElementById("rt["+i+"][3]");
		cell3.innerHTML = re[i];
	}
}

function LoadDAFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_da.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};
	
	var x = result.split("|");
	var xl = x.length;
	var ap = x.slice(0,xl);
	
	for(var i = 0; i<ap.length; i++){
		var cell2 = document.getElementById("rt["+i+"][1]");
		cell2.innerHTML = ap[i];
	}
}

function LoadDPAFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_dpa.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};
	
	var x = result.split("|");
	var xl = x.length;
	var ac = x.slice(0,xl);
	
	for(var i = 0; i<ac.length; i++){
		var cell3 = document.getElementById("rt["+i+"][2]");
		cell3.innerHTML = ac[i];
	}
}

function LoadDPFFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./upload_dpf.php", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	};
	
	var x = result.split("|");
	var xl = x.length;
	var re = x.slice(0,xl);
	
	for(var i = 0; i<re.length; i++){
		var cell4 = document.getElementById("rt["+i+"][3]");
		cell4.innerHTML = re[i];
	}
}

function UnlinkFile() {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "./unlink.php", false);
	xmlhttp.send();
}

function complete() {
	window.alert("complete.");
}

function loadingOnOff() {
	if(loading.style.display == "block") {
		loading.style.display = "none";
	}else {
		loading.style.display = "block";
	}
}


bt.onclick = function() {
	var miniType = f.value.slice(f.value.indexOf(".")+1).toLowerCase();

	if(!f.value) {
		window.alert("Select a file.");
		return false;
	}

	if(!ca.checked && !cpa.checked && !cpf.checked && !da.checked && !dpa.checked && !dpf.checked) {
		window.alert("Select a type of learning machine.");
		return false;
	}

	if(miniType != "txt" && miniType != "smi") {
		window.alert("Only .txt and .smi files can be selected.");
		return false;
	}
	loadingOnOff();
	LoadFile();

	if(ca.checked || cpa.checked || cpf.checked) { //cnn 학습기를 선택했을 때
		if(da.checked || dpa.checked || dpf.checked) {//cnn, dmlp 학습기가 함께 선택되었다면
			window.alert("Choose only one kind of learning machine.");
			return false;
		} else{ //cnn 학습기(3종류)만 선택했을 때
			setTimeout(createCTable,19);
			if(ca.checked && cpa.checked && cpf.checked) { //cnn 3종류 모두 선택
				//window.alert("CNN 학습기 모두 선택");
				var allCount = 3;
				var remainCount = allCount;
				setTimeout(LoadCAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadCPAFile,19);
				remainCount = remainCount -1;
				setTimeout(LoadCPFFile,19);
				remainCount = remainCount-1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(ca.checked && cpa.checked) { //cnn aplan, pplan-action 두 종류 선택
				//window.alert("CNN-A_Plan과 P_Plan-action 학습기 선택");
				var allCount = 2;
				var remainCount = allCount;
				setTimeout(LoadCAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadCPAFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(ca.checked && cpf.checked) { //cnn aplan, pplan-family 두 종류 선택
				//window.alert("CNN-A_Plan과 P_Plan-family 학습기 선택");
				var allCount = 2;
				var remainCount = allCount;
				setTimeout(LoadCAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadCPFFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(cpa.checked && cpf.checked) { //cnn pplan 두 종류 선택
				//window.alert("CNN-P_Plan 학습기 모두 선택");
				var allCount = 2;
				var remainCount = allCount;
				setTimeout(LoadCPAFile,19);
				remainCount = remainCount -1;
				setTimeout(LoadCPFFile,19);
				remainCount = remainCount-1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(ca.checked) { //cnn aplan만 선택
				//window.alert("CNN-A_Plan 학습기만 선택");
				setTimeout(LoadCAFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(cpa.checked) { //cnn pplan-action만 선택
				//window.alert("CNN-P_Plan-action 학습기만 선택");
				setTimeout(LoadCPAFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(cpf.checked) { //cnn pplan family만 선택
				//window.alert("CNN-P_Plan-family 학습기 선택");
				setTimeout(LoadCPFFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			}
		}
	} else if(da.checked || dpa.checked || dpf.checked) {//dmlp 학습기를 선택했을 때
		if(ca.checked || cpa.checked || cpf.checked){ //dmlp, cnn 학습기가 함께 선택되었다면
			window.alert("Choose only one kind of learning machine.");
			return false;
		} else{ //dmlp 학습기만 선택했을 때
			setTimeout(createCTable,19);
			if(da.checked && dpa.checked && dpf.checked) { //dmlp 3종류 모두 선택
				//window.alert("DMLP 학습기 모두 선택");
				var allCount = 3;
				var remainCount = allCount;
				setTimeout(LoadDAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadDPAFile,19);
				remainCount = remainCount -1;
				setTimeout(LoadDPFFile,19);
				remainCount = remainCount-1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(da.checked && dpa.checked) { //dmlp aplan, pplan-action 두 종류 선택
				//window.alert("DMLP-A_Plan과 P_Plan-action 학습기 선택");
				var allCount = 2;
				var remainCount = allCount;
				setTimeout(LoadDAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadDPAFile,19);
				remainCount = remainCount-1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(da.checked && dpf.checked) { //dmlp aplan, pplan-family 두 종류 선택
				//window.alert("DMLP-A_Plan과 P_Plan-family 학습기 선택");
				var allCount = 2;
				var remainCount = allCount;
				setTimeout(LoadDAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadDPFFile,19);
				remainCount = remainCount-1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(dpa.checked && dpf.checked) { //dmlp pplan 두 종류 선택
				//window.alert("DMLP-P_Plan 학습기 모두 선택");
				var allCount = 2;
				var remainCount = allCount;
				setTimeout(LoadDPAFile,19);
				remainCount = remainCount-1;
				setTimeout(LoadDPFFile,19);
				remainCount = remainCount-1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(da.checked) { //dmlp aplan만 선택
				//window.alert("DMLP-A_Plan 학습기만 선택");
				setTimeout(LoadDAFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(dpa.checked) { //dmlp pplan-action만 선택
				//window.alert("DMLP-P_Plan-action 학습기만 선택");
				setTimeout(LoadDPAFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			} else if(dpf.checked) { //dmlp pplan family만 선택
				//window.alert("DMLP-P_Plan-family 학습기 선택");
				setTimeout(LoadDPFFile,19);
				remainCount = remainCount -1;
				setTimeout(function() {
					UnlinkFile();
					complete();
					loadingOnOff();
				},19);
			}
		}
	}
}
