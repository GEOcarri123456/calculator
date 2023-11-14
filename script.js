function calculateSquare() {
    const side = parseFloat(document.getElementById('squareSide').value);
    const area = side * side;
    const perimeter = 4 * side;
    document.getElementById('squareArea').innerText = area.toFixed(2);
    document.getElementById('squarePerimeter').innerText = perimeter.toFixed(2);
}

function clearSquare() {
    document.getElementById('squareSide').value = '';
    document.getElementById('squareArea').innerText = '';
    document.getElementById('squarePerimeter').innerText = '';
}

function calculateCircle() {
    const radius = parseFloat(document.getElementById('circleRadius').value);
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius;
    document.getElementById('circleArea').innerText = area.toFixed(2);
    document.getElementById('circlePerimeter').innerText = perimeter.toFixed(2);
}

function clearCircle() {
    document.getElementById('circleRadius').value = '';
    document.getElementById('circleArea').innerText = '';
    document.getElementById('circlePerimeter').innerText = '';
}

function calculateTriangle() {
    const side1 = parseFloat(document.getElementById('triangleSide1').value);
    const side2 = parseFloat(document.getElementById('triangleSide2').value);
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);

    const area = (base * height) / 2;
    const perimeter = side1 + side2 + base;

    document.getElementById('triangleArea').innerText = area.toFixed(2);
    document.getElementById('trianglePerimeter').innerText = perimeter.toFixed(2);
}

function clearTriangle() {
    document.getElementById('triangleSide1').value = '';
    document.getElementById('triangleSide2').value = '';
    document.getElementById('triangleBase').value = '';
    document.getElementById('triangleHeight').value = '';
    document.getElementById('triangleArea').innerText = '';
    document.getElementById('trianglePerimeter').innerText = '';
}
