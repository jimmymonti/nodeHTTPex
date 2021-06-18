const http = reuire("http");

const populateHTML = (headingContent) => {
    return `<main style="backgound-color: burlywood; height: 100vh; margin: 0; padding: 0; display: flex; justify-content: center; align-items; center;">
    <h1>${headingContent}</h1>
    </main>`;
};

http
.createServer((request, response) => {
const { url, method } = request; 
const chunks = [];


request.on("error", (error) => {
    response.statusCode = 400;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(error));
    response.end();
})
}).on("data", (chunk) =>
Chunks.push(chunk);
}).on("end", () => {

const body = Buffer.concat(chunks).toString();
const responseBody = {
    url,
    method,
    body,
};
response.on("error") => {
    response.statusCode = 500;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(error));
    response.end();
});

    switch(url) {
case "/":

response.setHeader("Content-Type", "text/html");
response.write(populateHTML("Raise the Anthem, Burlywood."));
break;
case "/about":

const details = {
    name: "Jimmy",
    city: "Los Angeles"
};
response.setHeader("Content-Type", "application/json");
response.write(JSON.stringify(details));

Break:
case "/echo":

    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(responseBody));
break:
default;

response.setHeader("Content-Type", "applicaion/json");
response.write(populateHTML("404 Not Found. Try <a href=`http://localhost:3000`>this</a>"));
)
    );
    }
    return response.end();
});
})
.listen(3000, () => console.log("Server listening on port 3000..."));