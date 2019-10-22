import {getElementAttributes, getParentsSelector, isSelectorUnique} from 'getPathHelpers';

function getPath(element) {

	let parents = getParentsSelector(element);
	parents.push(getElementAttributes(element));
	let selectorElement = parents.join(' ');
	if(isSelectorUnique(selectorElement)) {
		console.log(`Уникальный селектор элемента ${element}: ${selectorElement}`)
	}
	console.log('Что-то пошло не так');
}

getPath($0);



