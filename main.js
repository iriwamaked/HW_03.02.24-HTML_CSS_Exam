var currentActiveElement = null;

function changeActive(element) {

    if (currentActiveElement) {
        currentActiveElement.classList.remove('active');
    }

    element.classList.add('active');

    currentActiveElement = element;
}


