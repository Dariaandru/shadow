// const line = document.getElementById('line'); // получаем элемент line
// const circle = document.getElementById('circle'); // получаем элемент circle
// const val = document.getElementById('val'); // получаем элемент val
// const square1 = document.getElementById('square1'); 
// const input = document.getElementById('input');  
const reset = document.getElementById('reset');
const body = document.getElementById('body');
const left = document.getElementById('left');
const right = document.getElementById('right');
let boxShadowColor = "#000000";
data = ["X", "Y", "Blur", "Spread", "Width", "Height", "Corner <br> Radius", "Rotation", "Scale"];
data_val = []
let scale = 10;
// rect.style.transform = `scale(${scale})`;

let mar = 0;
let i = 0;
let i1 = 0;
const coordX = [];
const coordY = [];
data.map(item => {
    
    


    const square = document.createElement('div');
    if (i < 4) {
        square.classList.add('polzunok');
        left.appendChild(square);
    } else {
        square.classList.add('polzunok1');
        right.appendChild(square);
    }
    if (i == 4) {
        mar = 0;
    }
    square.id = 'square';
    // body.appendChild(square);
    const x = document.createElement('p');
    x.innerHTML = item;
    square.appendChild(x);
    const square1 = document.createElement('div');
    square1.classList.add('polzunok0');
    square.appendChild(square1);
    const line = document.createElement('div');
    line.classList.add('line');
    square1.appendChild(line);
    const circle = document.createElement('div');
    circle.classList.add('circle');
    line.appendChild(circle);
    const val = document.createElement('div');
    val.classList.add('val');
    square1.appendChild(val);
    mar += 100;
    square.style.top = mar + 'px';
    coordX.push(square.getBoundingClientRect().left - 30);
    coordY.push(square.getBoundingClientRect().top - 30);
    if (item == "Scale") {
        circle.style.left = 10 + 'px';
    }
    if (item == "Corner <br> Radius") {
        circle.style.left = 10 + 'px';
    }
    // if (item == "Rotation") {
    //     circle.style.left = 0 + 'px';
    // }
    if (item == "X") {
        circle.style.left = 5 + 'px';
    }
    if (item == "Y") {
        circle.style.left = 0 + 'px';
    }
    if (item == "Blur") {
        circle.style.left = 5 + 'px';
    }
    if (item == "Spread") {
        circle.style.left = 0 + 'px';
    }
    if (item == "Width") {
        circle.style.left = 100 + 'px';
    }
    if (item == "Height") {
        circle.style.left = 100 + 'px';
    }

// перемещение мышью элемента по экрану

    let isDragging = false;
let initialX;
let initialY;


square.addEventListener('mousedown', function(e) {
  e.stopPropagation();
  isDragging = true;
  initialX = e.clientX - square.getBoundingClientRect().left + 30;
  initialY = e.clientY - square.getBoundingClientRect().top + 30;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    square.style.left = e.clientX - initialX + 'px';
    square.style.top = e.clientY - initialY + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});








// перемещение ползунка

let isDragging1 = false;
let initialX1;
let v;

// let initialY;
circle.addEventListener('mousedown', function(e1) {
    
    e1.stopPropagation();
    isDragging1 = true;
        initialX1 = e1.clientX - circle.getBoundingClientRect().left + square1.getBoundingClientRect().left; 
        // initialY = e.clientY - square.getBoundingClientRect().top;
    });
    
    document.addEventListener('mousemove', function(e1) {
        if (isDragging1) {
            if (e1.clientX - initialX1 <= 0) {
                circle.style.left = 0 + 'px';
                // isDragging1 = false;
                if (item == "Scale") {
                    circle.style.left = 5 + 'px';
                }
            }
            else if (e1.clientX - initialX1 >= 100) {
                // isDragging1 = false;
                circle.style.left = 100 + 'px';
            }
            else {
                circle.style.left = Math.round(e1.clientX - initialX1) + 'px';
                //   square.style.top = e.clientY - initialY + 'px';
            }
        
        }
            if (item == "Rotation")
            {
                
                val.innerHTML = `${Math.round(circle.style.left.split('px')[0]*3.6)}°`;
            }
            else if (item == "Scale")
            {
                val.innerHTML = `${circle.style.left.split('px')[0]/10}x`;
            }
                
            else {

                val.innerHTML = `${circle.style.left}`;
            }
            data_val[item] = `${circle.style.left}`;
            
            const rect = document.getElementById('rect');
            

rect.style.boxShadow = ` ${data_val["X"]} ${data_val["Y"]} ${data_val["Blur"]} ${data_val["Spread"]} ${boxShadowColor} `;
rect.style.width = `${data_val["Width"]}`;
rect.style.height = `${data_val["Height"]}`;
rect.style.borderRadius = `${data_val["Corner <br> Radius"]}`;
rect.style.transform = `rotate(${data_val["Rotation"].split('px')[0]*3.6}deg)`;
scale = `${data_val["Scale"].split('px')[0]/10}`;
rect.style.scale = `${scale}`;
            const css = document.getElementById('css');
            
            
            
            css.innerHTML = `box-shadow: ${data_val["X"]} ${data_val["Y"]} ${data_val["Blur"]} ${data_val["Spread"]} ${boxShadowColor}`;
        });
        
        document.addEventListener('mouseup', function() {
            isDragging1 = false;
        });
        
     
    

 i++;
});

const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', function() {
    const text = css.innerText;
    navigator.clipboard.writeText(text)
    copyButton.innerText = 'Copied!';
    setTimeout(function() {
        copyButton.innerText = 'Copy';
    }, 1000);
    
        
});



console.log(data_val);


const colors = ["Background color", "Rectangle color", "Shadow color"];
const color_val = [];

const color = document.getElementById('colors');
margin_color = 100;
colors.map(item => {
    const rect1 = document.createElement('div');
    rect1.id = 'rect1';
    rect1.classList.add('rect1');
    color.appendChild(rect1);
    const text = document.createElement('p');
    text.innerHTML = item;
    const color_value = document.createElement('input');
    color_value.type = 'color';
    rect1.appendChild(text);
    rect1.appendChild(color_value);
    rect1.style.left = margin_color + 'px';

    coordX.push(rect1.getBoundingClientRect().left);
    coordY.push(rect1.getBoundingClientRect().top);


    if (item == "Background color") {
        color_value.value = "#FFFFFF";
    }
    if (item == "Rectangle color") {
        color_value.value = "#CCCCCC";
    }
    

    
    
    margin_color += rect1.getBoundingClientRect().width + 100;

    color_val[item] = color_value.value;

    color_value.addEventListener('input', function() {
        if (item == "Background color") {
            body.style.backgroundColor = color_value.value;
        }
        if (item == "Rectangle color") {
            rect.style.backgroundColor = color_value.value;
        }
        if (item == "Shadow color") {
            boxShadowColor = color_value.value;
            rect.style.boxShadow = ` ${data_val["X"]} ${data_val["Y"]} ${data_val["Blur"]} ${data_val["Spread"]} ${boxShadowColor} `;
        }
        
    })

    // перемещение мышью элемента по экрану

    let isDragging2 = false;
let initialX2;
let initialY2;


rect1.addEventListener('mousedown', function(ee) {
  ee.stopPropagation();
  isDragging2 = true;
  initialX2 = ee.clientX - rect1.getBoundingClientRect().left;
  initialY2 = ee.clientY - rect1.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function(ee) {
  if (isDragging2) {
    rect1.style.left = ee.clientX - initialX2 + 'px';
    rect1.style.top = ee.clientY - initialY2 + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging2 = false;
});


})

// console.log(color_val);

console.log(coordX, coordY);

const squares = document.getElementsByClassName('polzunok');
const squares1 = document.getElementsByClassName('polzunok1');
const col = document.getElementsByClassName('rect1');
console.log(squares);
console.log(squares1);

reset.addEventListener('click', function() {
    for (let i2 = 0; i2 < 4; i2++) {
    squares[i2].style.left = coordX[i2] + 'px';
    squares[i2].style.top = coordY[i2] + 'px';
    }
    i1 = 0;
    for (let i3 = 4; i3 <= 8; i3++) {
        squares1[i1].style.left = coordX[i3] + 'px';
        squares1[i1].style.top = coordY[i3] + 'px';
        i1++;
        }
        i1 = 0;
    for (let i4 = 9; i4 <= 11; i4++) {
        col[i1].style.left = coordX[i4] + 'px';
        col[i1].style.top = coordY[i4] + 'px';
        i1++;
        }
    
})








  