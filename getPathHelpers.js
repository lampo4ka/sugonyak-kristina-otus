export const getElementAttributes = (element) => {
		let attributes = [];
		for (let attributeName of element.getAttributeNames()) {
			if(attributeName === 'id') {
				let attributeIdValue = '#' + element.getAttribute(attributeName);
				attributes.push(attributeIdValue);
			} else if (attributeName === 'class') {
				let attributeClassValue = element.getAttribute(attributeName);
				let classValue = attributeClassValue.replace(/^\b|\s/g,".");
				attributes.push(classValue);
			}
		}

		return attributes.join('');
};


export const getParentsSelector = (element) => {
		let parents = [];
		while(element.parentElement) {
			element = element.parentElement;
			parents.push(element.tagName);
		}
		parents.reverse();
		return parents;

};

export const isSelectorUnique = (selector) => {
		let uniqueElement = document.querySelectorAll(selector);
		return (uniqueElement.length === 1);
};



// пример <div class="wiki-left-present content-layout">Привет</div>

// распарсить строку => составить селектор:

// проверить, есть ли у элемента родитель => если есть, то добавить название родителя в селектор
// продолжаем искать родителей до тех пор, пока не упремся в body
// сделать поиск по этому селектору => посчитать кол-во вернувшихся элементов
// если вернулся 1 => вывести, что найден элемент по уникальному селектору
// если вернулось >1 => делать что-то дальше, чтобы селектор стал уникальным
//document.querySelector("#react-container > main > div.wiki-left-present.content-layout")

// let parent = element.parentElement();
//
// let selector = element.getAttribute("id");
// //let parent = element.parentNode;
// //let selectorParent = parent.getAttribute("id");
// //let currentSelector = selectorParent + ' ' + selector;
//
// let result  = document.querySelectorAll(`#${selector}`);
// if(result.length === 1) {
// 	return elementent;
// } else {
// 	console.log(result);
// }



