document.getElementById('btn1').onclick = function(){
    var diemTB = 0 
    var khuVuc = document.querySelector('#khuVuc').value*1
    var doiTuong = document.querySelector('#doiTuong').value*1
    var diemChuan = document.getElementById('diemChuan').value * 1
    var diemMon1 = document.getElementById('diemMon1').value*1
    var diemMon2 = document.getElementById('diemMon2').value*1
    var diemMon3 = document.getElementById('diemMon3').value*1
    var xepLoai = ''
    diemTB = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong
    if(diemTB >= diemChuan){
        xepLoai = 'Chúc mừng bạn đã đậu'
    }else if (diemTB < diemChuan){
        xepLoai = 'Rất tiếc bạn đã rớt'
    }if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0){
        xepLoai = 'Rất tiếc bạn đã rớt,vì có một môn bạn bị 0 điểm'
    }
    document.getElementById('ketQua1').innerHTML = ` ${xepLoai};  Điểm số của bạn là:  ${diemTB}`
    console.log(xepLoai)
    console.log(diemTB)
}

// Bài tập 2
const SO_DIEN='soDien'
function tienDienGiaiDoan1(soDien){
    switch (soDien){
        case soDien:{
            return 500
        }
    }
}
function tienDienGiaiDoan2(soDien){
    switch (soDien){
        case soDien:{
            return 650
        }
    }
}
function tienDienGiaiDoan3(soDien){
    switch(soDien){
        case soDien:{
            return 850
        }
    }
}
function tienDienGiaiDoan4(soDien){
    switch(soDien){
        case soDien:{
            return 1100
        }
    }
}
function tienDienGiaiDoan5(soDien){
    switch(soDien){
        case soDien:{
            return 1300
        }
    }
}

document.getElementById('btn2').onclick = function(){
    var hoTen = document.getElementById('hoTen').value
    var soDien = document.getElementById('soDien').value*1
    var giaTienDien1 = tienDienGiaiDoan1(soDien)
    var giaTienDien2 = tienDienGiaiDoan2(soDien)
    var giaTienDien3 = tienDienGiaiDoan3(soDien)
    var giaTienDien4 = tienDienGiaiDoan4(soDien)
    var giaTienDien5 = tienDienGiaiDoan5(soDien)
    console.log(giaTienDien1)
    console.log(giaTienDien2)
    console.log(giaTienDien3)
    console.log(giaTienDien4)
    console.log(giaTienDien5)

    if(soDien <= 50){
        tongTien = soDien * giaTienDien1
    }else if(soDien > 50 && soDien <= 100){
        tongTien =  giaTienDien1 *50 + giaTienDien2 * (soDien - 50)
    }else if(soDien >= 100 && soDien < 200){
        tongTien = giaTienDien1 * 50 + giaTienDien2 * 50 + giaTienDien3 * (soDien - 100)
    }else if(soDien >= 200 && soDien <= 350){
        tongTien = giaTienDien1 * 50 + giaTienDien2 * 50 + giaTienDien3 * 100 + giaTienDien4*(soDien-200)
    }else{
        tongTien = giaTienDien1 * 50 + giaTienDien2 * 50 + giaTienDien3*100 + giaTienDien4 * 150 + giaTienDien5 *(soDien - 350)
    }
    document.getElementById('ketQua2').innerHTML = `Khách hàng là: ${hoTen}, Tiền điện: ${tongTien.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',})}`
}

// Bài tập 3

document.getElementById('btn3').onclick = function (){
    var nguoiNop = document.getElementById('tenKhachHang1').value;
    var thuNhapNam = document.getElementById('thuNhapNam').value*1;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value*1;
    // console.log(nguoiNop + thuNhapNam +soNguoiPhuThuoc);
    var thuNhapChiuThue = ""
    var thue = ""
    if(thuNhapNam<= 60000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.05;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + thue
    }if(thuNhapNam> 60000000&&thuNhapNam<=120000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.1;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 120000000&&thuNhapNam<=210000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.15;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 210000000&&thuNhapNam<=384000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.2;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 384000000&&thuNhapNam<=624000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.25;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 624000000&&thuNhapNam<=960000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.30;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 960000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.35;
        document.getElementById('ketQua3').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }

}