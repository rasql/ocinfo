/* --- JavaScript editor --- */

var result = "";		// global result for print()

function print(s){
	result = result+ s + "\n";
}

function myFunction(id) {
	result="";
    var s = document.getElementById("in"+id).value;
    eval(s);
    document.getElementById("out"+id).innerHTML = result;
}

// based on fixed sequence <button><textarea><pre>
function set_js() {
	btn = this.event.target;
	input_ = btn.nextSibling;
	output = input_.nextSibling;	
	result="";
	code = input_.value;
	eval(code);
    output.innerHTML = result;
}

// set from output text area
function set_js() {
	output = this.event.target;
	input_ = output.previousSibling;
	result="";
	code = input_.value;
	eval(code);
    output.innerHTML = result;
}



/* === HTML editor ===*/

// update html with id="in"/"out"
function display_html() {
    input_ = document.getElementById("in");
    output =document.getElementById("out")
    do_html(input_, output)
}  
  
// update html from a button placed in front of the input node
function set_html() {
	btn = this.event.target;
	parent_ = btn.parentNode;
	input_ = parent_.childNodes[1];
	output = parent_.childNodes[2];
    do_html(input_, output)	
}

// update HTML for given in/out nodes
function do_html(input_, output) {
	output.innerHTML = input_.value;
	
	//evaluate the scripts in the updated node
    arr = output.getElementsByTagName('script');       
 	for (var n = 0; n < arr.length; n++)
    	eval(arr[n].innerHTML)//run script inside div   
}


// update all HTML input/output fields 
function update_page() {
	inputs = document.getElementsByClassName("input");
	//alert(inputs)
	n=inputs.length;
	//alert(n)
	for (i=0; i<n; i++)
		do_html(inputs[i], inputs[i].nextSibling)
}


	
function toggle() {
	
}	

// used as quick testing function for buttons, oncall
function test() {
	window.alert('TEST target: '+this.event.target);
}


// used by navigation menu
function load_page(file) {
	div = document.getElementById("main")
	div.setAttribute('w3-include-html', file);
	w3.includeHTML();
	//await sleep(500);
	update_page();
}

	