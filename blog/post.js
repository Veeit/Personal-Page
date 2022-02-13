void async function() {
	var templates = document.createElement('template');
	templates.innerHTML = await (await fetch('../componets.html')).text();

	var template1 = templates.content.querySelector('header');
	var footer = templates.content.querySelector('footer');
	
	a1 = document.importNode(template1, true);
	footerElement = document.importNode(footer, true);
	
	var container = document.getElementsByTagName("main")[0]
	container.insertBefore(a1, container.firstChild);
	container.appendChild(footerElement);
}()