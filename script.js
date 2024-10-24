
let textArea = document.getElementById('text-area');
let color = document.getElementById('color');
let btnAddNote = document.getElementById('add-note');
let noteList = document.getElementById('note-list');
let paragraph = document.getElementById('paragraph');

// textArea.value = "";
btnAddNote.addEventListener('click',function(){
    console.log(noteList);
    // getting text and color from input fields
    let textValue = textArea.value;
    let colorValue = color.value;
    console.log(textValue);

    // checking if text is empty or not
    if(textValue == ""){
        alert("Please enter some text");
        return;
    }
    // newDiv we have created it dynamically
    let newDiv = document.createElement('div');
    // para and crossbutton are child which we need to embed in a newdiv 
    let para = document.createElement('p');
    para.textContent = textValue;
    
    // created a cross button and its style
    let crossBtn = document.createElement('button');
    crossBtn.textContent = 'X';
    crossBtn.style.color ='red';
    crossBtn.style.float = 'right';
    crossBtn.style.marginTop = '-55px';
   
    // to add the class to the newDiv which we have created dynamically
    newDiv.classList.add("note-style");

    // adding styles to the newDiv
    newDiv.style.backgroundColor = colorValue;
    newDiv.style.padding = '10px';
    newDiv.style.borderRadius = '10px';
    newDiv.style.cursor = 'pointer';
    newDiv.style.margin = '80px 0 0 40px';
    // append child on new div
    newDiv.appendChild(para);
    newDiv.appendChild(crossBtn);
    // append newDiv on its parent  div
    noteList.append(newDiv);
    
    // add event listener to cross button to remove the div when clicked
    crossBtn.addEventListener('click',function(){
        console.log(this.parentElement);
        this.parentElement.remove();
    });

    // checking if any note is present or not
    if(!noteList.children.length){
        paragraph.style.display = 'block';
    }else{
        paragraph.style.display = 'none';
    }
    // resetting the input fields
    textArea.value = '';
});


// 1. create a div , 2. create  a p tag and aa cross btn, 3, first add teh p and btn to the div, 4. current div ko add kardo main div me