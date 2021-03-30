//khởi tạo môi trường node
//1. khởi tạo git? git init -> cái này để khởi tạo môi trường github
//2. Khởi tạo môi trường node js? npm init -> cái này là khởi tạo các thông tin của dự án sau khi khởi tạo xong sẽ sinh ra 1 file là package.json
//3. khởi tạo package-lock.json cái này thì khởi tạo hay không thì k bắt buộc nhưng mà phải hiểu rằng là nó là 1 phần của node
//4. cài cáci gói module trong npm -> ex: npm install <ten-goi> (npm i <tengoi>) mọi gói mà tải lên nó sẽ nằm trong node_module
//npm i -g ? vậy g là gì? nó là chữ cái viết tắt của chữ Global (Quốc tế -> chữ này sẽ có thể chạy đc nhiều dự án mà k cần phải cài lại)
//Note: node_module ?
//5. tạo 1 file js (tên gì cũng được) -> mục đích của nó là sẽ tạo các kết nối giữa các khối lệch js và tương tác với server thông qua các khối lệnh js
//6. folder public là nơi chứa các file mực đích công khai và ng khác có thể đi tới .....
const express = require("express"); //khai báo
const app = express(); //sử dụng
const port = 2000; //khai báo cổng hoạt động của thằng node

app.use(express.static("public")); //đưa thưu mục public công khai có thể truy cập vào

app.set("view engine", "ejs"); //áp dụng template view engine là ejs ( ngoài ejs ra nó có rất nhiều tempalte khác mà e có thể tự tìm hiểu)
app.set("views", "./views"); //áp dụng thư mục views -> coi thư mục views là nơi chứa các view engine

 //đoạn này có trong slide lab tự code bỏ vào
app.get("/", (req, res) => {
  //cái này phải tìm hiểu kỹ request/ response và cả các phương thức get , post , delete, update, put ....patch
  var today = new Date();
  currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day= "hứ bảy";
      break;
      default:
      console.log(`Error: ${currentDay}`);
    }
     res.render('shop',{kindOfDay:day})
});
app.listen(port,() => {
    console.log(`dang chạy cổng ${port}`)
})
