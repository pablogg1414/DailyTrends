const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.nytimes.com/es/");


    console.log('NOTICIA PORTADA PERIÓDICO "NEW YORK TIMES" \n\n');


    //Sacar imagen (No hay)
    
    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=article-module] ../figure a img' ).textContent;
    //     return element;
    // });
    // console.log(imagen);


    

    //Sacar título

    const titulo = await page.evaluate(() => {
        const element = document.querySelector('[class=css-7l6h4f] h2 a');
        if (element!=null){
            return element.textContent;
        }
    });
    if(titulo!=null){
        console.log(titulo +"\n");
    }
    // Sacar descripcion

    const descripcion = await page.evaluate(() => {
        const element = document.querySelector('[class=css-7l6h4f] p');
        if (element!=null){
            return element.textContent;
        }
    });
    if(descripcion!=null){
        console.log(descripcion +"\n");
    }

    // Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=css-9voj2j]');
        if (element!=null){
            return element.textContent;
        }
    });

    if(fuente!=null){
        console.log(fuente +"\n");
    }


    await browser.close();

})();