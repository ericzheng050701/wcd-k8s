const http = require('http'),
      fs = require('fs');

const handler = (request, response) => {
  fs.readFile('/etc/config/password1', 'UTF-8', (err, password1) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("'Secret 1' (from env variable): " + password1 + '<br />');
      response.write("'Secret 2' (from volume): " + process.env.password2);
      response.end();
    }
  });
};

const www = http.createServer(handler);
www.listen(9000);

