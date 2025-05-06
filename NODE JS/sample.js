export function dev()
{
    return new Date();
}
import { createServer } from 'http';
createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are: " + dev());
    res.end();

}).listen(8080);
}).listen(8080);