// Sử dụng module http
const http = require("http");

// Cấu hình HTTP server để phản hồi bằng nội dung HTML
const server = http.createServer(function (request, response) {
  // Phải dùng text/html để hiển thị màu và thẻ HTML
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  response.write(`
    <h1 style="color: blue; text-align: center;">
      Chào mừng bạn đã đến với Khoa Công nghệ Thông tin UEH
    </h1>
  `);

  response.end();
});

// Lắng nghe trên cổng 8080 ở localhost
const port = 8080;
server.listen(port);

// Thông báo ra terminal
console.log("Server đang chạy tại port=" + port);
