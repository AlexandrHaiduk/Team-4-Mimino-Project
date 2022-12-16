function animatedIcon() {

	const faviconAnimation = [
		"",
		"",
        "",
		"",
		"",
        
		""
	]

	const titles = [
		"M",
		"MI....",
		"MIM...",
        "MIMI..",
		"MIMIN.",
		"MIMINO"
      
	]

	if (!document.querySelector("head link[rel='icon']")) document.querySelector("head").innerHTML = document.querySelector("head").innerHTML + '<link rel="icon" type="image/png" sizes="32x32" href="">';

	document.querySelector("head link[rel='icon']").setAttribute('href', 'data:image/png;base64,' + faviconAnimation[0] + '');
	document.querySelector("title").innerHTML = titles[0];

	let animCount = 0;
	function animFoo() {
		if (animCount >= faviconAnimation.length) { animCount = 0; }
		document.querySelector("head link[rel='icon']").setAttribute('href', 'data:image/png;base64,' + faviconAnimation[animCount] + '');
		document.querySelector("title").innerHTML = titles[animCount];
		animCount++;
	}

	setInterval(() => { animFoo() }, 500);

}

animatedIcon();