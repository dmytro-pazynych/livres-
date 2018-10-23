var loader = '<div id="app"><div class="preloading preloading-box"><p>Game Over</p></div></div>';
var navbar = '#app > div:nth-child(1) > nav > div > ul';
	var list = document.querySelector(navbar)
	var node = document.createElement("LI");             // Create a <li> node
	var textnode = document.createTextNode("Extension Loading...");     // Create a text node
	node.appendChild(textnode); 

	var title = '#app > div:nth-child(1) > nav > div > ul > li:nth-child(1) > a';

	    document.querySelector(title).onclick = function(){
	    	window.location.href = 'https://myaccount.lrwriters.com/findorders/all';
		}; 

var finances = '#app > div:nth-child(1) > nav > div > ul > li:nth-child(5) > a';
var deadline1 = new Date().getTime();
var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var ms = new Date().getMilliseconds();
var deadline = deadline1 - h*1000*60*60 - m*1000*60 - s*1000 - ms + 1000 * 60 * 60 * 24;
      var x = setInterval(function() {
	      var nowDay = new Date().getDate();
	      var nowTime = new Date().getTime();
	      var t = deadline - nowTime;
	      if (nowDay == 10 || nowDay == 25) {
		      var days = Math.floor(t / (1000 * 60 * 60 * 24));
		      var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
		      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		      var seconds = Math.floor((t % (1000 * 60)) / 1000);
		      if (hours < 10) {
		      	hours = "0" + hours;
		      };
		      if (minutes < 10) {
		      	minutes = "0" + minutes;
		      };
		      if (seconds < 10) {
		      	seconds = "0" + seconds;
		      };
		      //document.querySelector(finances).innerHTML = "Finances <b class='text-warning tooltip-trigger'>" + hours + "h " + minutes + "m " + seconds + "s</b>";
		      document.querySelector(finances).innerHTML = '<div class="tooltip-container"><span class="tooltip-trigger">' + "Finances <b class='text-warning tooltip-trigger'>" + hours + "h " + minutes + "m " + seconds + "s</b>" + '</span><span class="tooltip-content position-down"><span>Withdrawal deadline</span></span></div>';
		    
	      };
	      if (t < 0) { 
        	clearInterval(x); 
        	document.querySelector(finances).innerHTML = "Finances"; 
   		 } 
	      
      }, 1000);

//timer
function sleep(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
};

async function livres(){

        chrome.storage.sync.get(['favoritePrice'], function(result) {
          console.log('Price per page value currently is ' + result.favoritePrice);
          pr = result.favoritePrice;
        })


                           // Append the text to <li>
	await document.querySelector(navbar).appendChild(node);

	await sleep(2500);



	await list.removeChild(list.childNodes[6]);

    //document.querySelector(title).innerHTML = document.querySelector(title).innerHTML + ' ++';
    var price_title = '#app > div:nth-child(2) > div > div > div.sticky-table > div.sticky-table-head > div.table-header > div > div:nth-child(5) > a';
    document.querySelector(price_title).innerHTML = "Total $ / page $";
    document.querySelector('#router > footer > div > div:nth-child(1)').innerHTML = document.querySelector('#router > footer > div > div:nth-child(1)').innerHTML + "<span class='dotted-devider'>·</span> livres++ extension is developed by <a href='mailto:dpazynych@gmail.com'>Dmytro Pazynych</a>"


    const orders = '#app > div:nth-child(2) > div > div > div.sticky-table > div.sticky-table-body';
    const price_index = '#app > div:nth-child(2) > div > div > div.sticky-table > div.sticky-table-body > div:nth-child(INDEX) > div:nth-child(5) > span';
	const estimation_index = '#app > div:nth-child(2) > div > div > div.sticky-table > div.sticky-table-body > div:nth-child(INDEX) > div.col-2';
	var row_index = '#app > div:nth-child(2) > div > div > div.sticky-table > div.sticky-table-body > div:nth-child(INDEX)';
	let orders_num = document.querySelector(orders).childElementCount;

	for (let i = 1; i <= orders_num; i++) {
		let price_iterator = price_index.replace("INDEX", i);
		let estimation_iterator = estimation_index.replace("INDEX", i);
		let row = row_index.replace("INDEX", i);

		let price = Number(document.querySelector(price_iterator).innerHTML.slice(69).slice(0, -20));
		//size
		let str = document.querySelector(estimation_iterator).innerHTML;


		if (str.slice(0,2) == '<a') {
				      	//complex orders    	
								var w1b = str.split('>')[1].split('w')[0];
								var w1e = str.split(' /')[1].split('w')[0];
								if (isNaN(w1b))	{
									w1b = 0
								} else {
									w1b = parseInt(w1b)
								};
								if (isNaN(w1e)) {
									w1e = 0
								} else {
									w1e = parseInt(w1e)
								};

								var m1b = str.split('>')[1].split('m')[0];
								var m1e = str.split(' /')[1].split('m')[0];
								if (isNaN(m1b))	{
									m1b = 0
								} else {
									m1b = parseInt(m1b)
								}
								if (isNaN(m1e)) {
									m1e = 0
								} else {
									m1e = parseInt(m1e)
								}

								var p1b = str.split('>')[1].split('p')[0];
								var p1e = str.split(' /')[1].split('p')[0];
								if (isNaN(p1b))	{
									p1b = 0
								} else {
									p1b = parseInt(p1b)
								}
								if (isNaN(p1e)) {
									p1e = 0
								} else {
									p1e = parseInt(p1e)
								}

								var s1b = str.split('>')[1].split('s')[0];
								var s1e = str.split(' /')[1].split('s')[0];
								if (isNaN(s1b))	{
									s1b = 0
								} else {
									s1b = parseInt(s1b)
								}
								if (isNaN(s1e)) {
									s1e = 0
								} else {
									s1e = parseInt(s1e)
								}

								str = (w1b + w1e)/300 + (m1b + m1e)/60 + (p1b + p1e) + (s1b + s1e)/2
								
				      } else if (str.length > 15) {
				        	var regex = /\>(.*?)\</;
				        	temp = regex.exec(str)[1];      
				    	    if (temp.slice(-5) == 'pages') {
				    	 			size = Number(temp.slice(0, -6));
				    	 			str = size;
				    	 		} else if (temp.slice(-4) == 'page') {
				    	 			size = Number(temp.slice(0, -5));
				    	 			str = size;
				    	 		} else if (temp.slice(-5) == 'words') {
				    	 			size = Number(temp.slice(0, -6));
				    	 			str = size/300;
				    	 		} else if (temp.slice(-7) == 'minutes') {
				    	 			size = Number(temp.slice(0, -8));
				    	 			str = size/60;
				    	 		} else if (temp.slice(-6) == 'slides') {
				    	 			size = Number(temp.slice(0, -7));
				    	 			str = size/2;
				    	 		}
				    	 		else {
				    	 			str = str;
				    	 		}
					 	} else {
				      	 		if (str.slice(-5) == 'pages') {
				      	 			size = Number(str.slice(0, -6));
				      	 			str = size;
				      	 		} else if (str.slice(-4) == 'page') {
				      	 			size = Number(str.slice(0, -5));
				      	 			str = size;	 			
				      	 		}
				      	 		else if (str.slice(-5) == 'words') {
				      	 			size = Number(str.slice(0, -6));
				      	 			str = size/300;
				      	 		} else if (str.slice(-7) == 'minutes') {
				      	 			size = Number(str.slice(0, -8));
				      	 			str = size/60;
				      	 		} else if (str.slice(-6) == 'slides') {
				    	 			size = Number(str.slice(0, -7));
				    	 			str = size/2;
				    	 		}
				      	 		else {
				      	 			str = str;
				      	 		}

					 	};			 	
		var perPage = price/str;
		document.querySelector(price_iterator).innerHTML = document.querySelector(price_iterator).innerHTML + ' / $' + perPage.toFixed(2);
		if (pr == 'smart') {

				if (perPage >= 10) {
					document.querySelector(row).style.backgroundColor = "#76f79d";
				} else if (perPage >= 7) {
					document.querySelector(row).style.backgroundColor = "#a5ffc0";	
				} else if (perPage >= 5) {
					document.querySelector(row).style.backgroundColor = "#ddffe7";	
				} else if (perPage >= 3.5)
					document.querySelector(row).style.backgroundColor = "#ffcece";
				} else if (perPage < 3.5){
					document.querySelector(row).style.backgroundColor = "#ffa8a8";
				} 
	

			if (perPage >= pr) {
				document.querySelector(row).style.backgroundColor = "#f4fff5";
			};


	};
};



chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (key in changes) {
          location.reload();
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });

	if (window.location.href == 'https://myaccount.lrwriters.com/findorders/all') {
    	console.log('findorders');
    	livres();
    } else {
    	console.log('else')
    }

