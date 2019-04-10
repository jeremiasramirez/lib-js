 /*
 funcion que elimina un elemento html en un tiempo definido en milisegundos
  3 segundos, recibe el elemento html y el tiempo
 */

function deletingItem(element, elementTime){

		setTimeout((e)=>{

			element.remove();
		 
		},elementTime)

}

 /*
 funcion que elimina al instante la clase de un elemento html , recibe como parametro el elemento
 html  y la clase que le vas a eliminar
 */
function deleteWithClass(elements,classElement){
	elements.classList.remove(classElement);
}

/*
 Funcion que agrega al instante una clase a un elemento html , recibe como parametro el elemento
 html  y la clase que le vas a agregar
 */
function addWithClass(elements,classElement){
	elements.classList.add(classElement);
}
/*
 Funcion que elimina la clase de un elemento html en un tiempo definido, recibe como parametro
 el elemento html, la clase que le vas a eliminar y el tiempo en que la vas a eliminar
 */
function deleteWithClassTime(elements, classElement, definitiveTime){
	let elementTime = setTimeout((e)=>{
		elements.classList.remove(classElement);
	}, definitiveTime);
}


/*
 *Funcion que agrega clase a un elemento en tiempo definido (segundos), recibe el elemento html,
 la clase del elemento y los segundos en milisegundos
*/
function addWithClassTime(elements, classElement, definitiveTime){
	let elementTime = setTimeout((e)=>{
		elements.classList.add(classElement);
	}, definitiveTime)
}

 /*
 Funcion que agrega un elemento html con contenido en tiempo definido (segundos), recibe el tipo de elemento,
 la clase que tendra el elemento y el tiempo a crear (milisegundos).
*/
function addElementTime(typeElement,classElement, content, time){
	let elements = 0;
	
	let time = setTimeout((e)=>{
		
	   elements = document.createElement(typeElement);
		    elements.classList.add(classElement);
		    elements.textContent = content;
		
	}, time)
	
	return elements;

}





