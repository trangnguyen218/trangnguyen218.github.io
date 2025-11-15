var name = "Nguyễn Thị Hà Trang";
var MSSV = "31231025299";
document.write(`Tôi tên là ${name} - MSSV: ${MSSV} sẽ quyết tâm trở thành 1 anh hùng JS`);

var level = 1;
var xp = 0;
var skillPoints = 5;

var strength = 0.6*skillPoints + 0.1*xp;
var agility = 0.2*skillPoints + 0.2*xp;
var intel = 0.2*skillPoints + 10*level;

document.write(`<br>Chỉ số strength của bạn là ${strength}`);
document.write(`<br>Chỉ số agility của bạn là ${agility}`);
document.write(`<br>Chỉ số intel của bạn là ${intel}`);

var namNhapLai = prompt("Tên bạn là gì?", "");
if(name == namNhapLai){
    console.log("Chính xác! Bạn có trí nhớ rất tốt! skillPoints +5!");
    skillPoints += 5;
}else{
    console.log("Tệ thật! Tên chính mình mà không nhớ sao?! skillPoints -5!");
    skillPoints -= 5;
}

// Cập nhật lại chỉ số
strength = 0.6*skillPoints + 0.1*xp;
agility = 0.2*skillPoints + 0.2*xp;
intel = 0.2*skillPoints + 10*level;

// Thay vì prompt, mặc định chọn 'a', bạn có thể đổi thành 'b' hoặc 'c'
var phancap = prompt("Chọn phân cấp của bạn (a: Chiến Binh/b: Sát Thủ/c: Thợ Săn):", "");
switch(phancap){
    case "a":
        var phanCapText = "Chiến Binh";
        strength += 10;
        agility -= 10;
        break;
    case "b":
        var phanCapText = "Sát Thủ";
        strength -= 10;
        agility += 5;
        intel += 5;
        break;
    case "c":
        var phanCapText = "Thợ Săn";
        strength -= 10;
        agility += 10;
        break;
}

// Hiển thị trong ô đỏ
document.addEventListener("DOMContentLoaded", function() {
document.getElementsByClassName("capnhat")[0].innerHTML = `
Sau khi lựa chọn: Xin chào ${phancap}
<br>Chỉ số strength: ${strength}
<br>Chỉ số intel: ${intel}
`;
});