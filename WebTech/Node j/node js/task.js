const http = require("http");
const fs = require("fs");

let html = fs.readFileSync("./template/index.html", "utf-8");
let products = JSON.parse(fs.readFileSync("./data/product.json", "utf-8"));
let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
let productsCard = fs.readFileSync("./template/productCard.html", "utf-8");
let productsHTML = fs.readFileSync("./template/product.html", "utf-8");

let productsResultArray = products.map(product => {
  let result = productsCard.replaceAll("{{%IMAGELINK%}}", product.image);
  result = result.replaceAll("{{%TITLE%}}", product.title.slice(0, 30) + "...");
  result = result.replaceAll("{{%PRICE%}}", product.price);

  return result;
});

const server = http.createServer((req, res) => {
  let url = req.url.toLowerCase();

  if (url == "/" || url == "/home") {
    let result = html.replaceAll("{{%Title%}}", "Home");
    result = result.replaceAll("{{%Content%}}", "Home");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/about") {
    let result = html.replaceAll("{{%Title%}}", "About");
    result = result.replaceAll("{{%Content%}}", "About");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/contact") {
    let result = html.replaceAll("{{%Title%}}", "Contact");
    result = result.replaceAll("{{%Content%}}", "Contact");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/login") {
    let result = html.replaceAll("{{%Title%}}", "Login");
    result = result.replaceAll("{{%Content%}}", "Login");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/products") {
    let productsContainer = `
    <section style="display:flex;flex-wrap:wrap;justify-content: center; align-items: center;gap:10px">
    ${productsResultArray.join("")}
    </section>  
    `;

    let result = productsHTML.replaceAll("{{%Title%}}", "Products Page");
    result = result.replaceAll("{{%Content%}}", productsContainer);

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/users") {
    let result = html.replaceAll("{{%Title%}}", "Users");
    result = result.replaceAll("{{%Content%}}", "Users");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/api/products") {
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "Success",
        count: products.length,
        data: products,
      })
    );
  } else if (url == "/api/users") {
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "Success",
        count: users.length,
        data: users,
      })
    );
  } else {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end("<h1>Sorry, Page Not Found..</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started on 127.0.0.1:8000");
});
