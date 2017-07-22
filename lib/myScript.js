/* --- Top menu --- */
var folder, file;

function menu() {
	el = this.event.target;
	//alert(el)
	w3.removeClass('header li', 'active')
	w3.addClass(el, 'active')
	folder = el.innerHTML.toLowerCase()
	//alert(menu)
	
	nav_file=folder+"/nav.html"
	div = document.getElementById('nav');
	div.setAttribute('w3-include-html', nav_file);

	main_file=folder+"/01.html"
	div = document.getElementById('main');
	div.setAttribute('w3-include-html', main_file);
	window.name=main_file
	w3.includeHTML();	
}


// used by navigation menu
function load_page(file) {
	window.name=file; // semi-permanent storage
	//alert(file)
	el = this.event.target;
	w3.removeClass('nav li', 'active')
	w3.addClass(el, 'active')
	var nav = el.innerHTML
	
	div = document.getElementById("main")
	div.setAttribute('w3-include-html', file);
	w3.includeHTML();
	//await sleep(500);
	set_all_html();	
}


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



// update all HTML input/output fields 
function set_all_js() {
	inputs = document.getElementsByClassName("input");
	n=inputs.length;
	for (var i=0; i<n; i++) {
		do_js(inputs[i], inputs[i].nextSibling)
	}
}


// run JS code for given input/output nodes
function do_js(input_, output) {
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


// update html when clicking in output field
function update_html() {
	input_ = this.event.target.previousSibling
	output = this.event.target
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
function set_all_html() {
	inputs = document.getElementsByClassName("input");
	n=inputs.length;
	for (i=0; i<n; i++)
		do_html(inputs[i], inputs[i].nextSibling)
}


	
function toggle() {
	
}	

// used as quick testing function for buttons, oncall
function test() {
	window.alert('TEST target: '+this.event.target);
}


/* --- insert HTML tags --- */
function insert_html_tag(tag) {
	var el = document.getElementById("in")
	var start = el.selectionStart
    var end = el.selectionEnd
    var text = el.value
    var before = text.substring(0, start)
    var middle = text.substring(start, end)
    var after  = text.substring(end, text.length)
    el.value = (before+"<"+tag+">"+middle+"</"+tag+">"+after)
    el.selectionStart = el.selectionEnd = start + newText.length*2+5
    el.focus()
}