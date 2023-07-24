function generateFibo(n) {
    let fiboNum = [0,1];
    for (let i = 2; i < n; i++){
        fiboNum.push(fiboNum[i-1] + fiboNum[i-2]);
    }
    return fiboNum;
}

function showFibo(){
    const n = 10;
    const fibonacciNumber = generateFibo(n);
    const newPageContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Fibonacci Numbers</title>
    </head>
    <body>
      <h1>Fibonacci Numbers</h1>
      <p>${fibonacciNumber.join(', ')}</p>
    </body>
    </html>
    `;

    const newPage = window.open();
    newPage.document.write(newPageContent);
}

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', showFibo);