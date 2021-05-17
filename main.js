const pageHeader = document.getElementById('page-header');
pageHeader.textContent = 'New DOM Layout';
pageHeader.classList = 'bg-success';

const para1 = document.getElementById('para1');
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

const para2 = document.getElementById('para2');
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents/  It represents the page so that programs can change the document structrue, style, and content.  The DOM represents the document as nodes and objects.  That way, programming languages can connect to the page.'

const button = document.getElementById('btn').addEventListener('click', buttonClick);
function buttonClick(){
    const para4 = document.getElementById('para4');
    para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
}

const cards = document.getElementsByClassName('card-body');
cards[0].style.backgroundColor = 'red';
cards[1].style.backgroundColor = 'blue';
cards[2].style.backgroundColor = 'yellow';
cards[3].style.backgroundColor = 'green';
cards[4].style.backgroundColor = 'black';
