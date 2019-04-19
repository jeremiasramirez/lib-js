//funcion que elimina un elemento html en un tiempo definido(millisegundos), le pasamos el elemento html y el tiempo a eliminar
const deleteElementTime = (empty, time) => {

		setTimeout((e)=>{

			empty.remove();
		 
		}, time)

}

//elimina la clase de un elemento , recibe el elemento y la clase del elemento
const deleteWithClass = (elements, classElement) => {
	elements.classList.remove(classElement);
}

//elimina elemento html por id
const deleteElement = (elementId) => {
	document.getElementById(elementId).remove();
}


//agrega clase a un elemento , recibe el elemento y la clase del elemento
const addWithClass = (elements, classElement) => {
	elements.classList.add(classElement);
}

/*
 *elimina la clase de un elemento en tiempo definido (segundos), recibe el elemento html,
  la clase del elemento y el tiempo en milisegundos
*/
const deleteWithClassTime = (elements, classElement, definitiveTime) => {

	let elementTime = setTimeout((e)=>{
		elements.classList.remove(classElement);
	}, definitiveTime);

}


/*
 *agrega clase a un elemento en tiempo definido (segundos), recibe el elemento html, la clase del elemento
 y los segundos en milisegundos
*/
const addWithClassTime = (elements, classElement, definitiveTime) => {

	let elementTime = setTimeout((e)=>{
		elements.classList.add(classElement);
	}, definitiveTime)

}
