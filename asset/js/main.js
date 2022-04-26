$(document).ready(function()
{
    var i =1;
    $("#btn2").click(function()
    {
        $("#myModal").modal();
    }
    );

    function kiemTraTen()
    {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#Name").val() == "")
        {
            $("#tbName").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Name").val()))
        {
        $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
        return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo()
    {
        let mauKT = /^\d*$/;
        if($("#Ao").val() == "")
        {
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Ao").val()))
        {
        $("#tbAo").html("Dùng số từ 1 đến 100");
        return false;
        }
        else
        {
            var soAo = $("#Ao").val();
            if(soAo < 1 || soAo > 100)
            {
                $("#tbAo").html("Từ 1 đến 100");
            }
            else
            {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);


    function kiemTraDiaChi()
    {
        var i = 1;
        let mauKT =/[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)$/;
        if($("#DC").val() == "")
        {
            $("#tbDC").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#DC").val()))
        {
        $("#tbDC").html("Mỗi ký tự đầu viết hoa không sử dụng số");
        return false;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#Name").blur(kiemTraDiaChi);


    function kiemTraNTT()
    {
        if($("#NTT").val() == "")
        {
            $("#tbNTT").html("Không được để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate()+7);
        if(today > ntt)
        {
        $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
        return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#Name").blur(kiemTraNTT);

    
    function kiemTraSDT()
    {
        let mauKT =/^0\d{3}-\d{3}-\d{3}$/;
        if($("#SDT").val() == "")
        {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#SDT").val()))
        {
        $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
        return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#Name").blur(kiemTraSDT);



    $("#Save").click(function()
    {
        if(kiemTraDiaChi() == true && kiemTraNTT() == true && kiemTraSDT() == true && kiemTraSoAo() == true && kiemTraTen( )== true)
        {
            row = "<tr>";
            row += "<th> " + (i++) + "</th>";
            row += "<th> " + $("#Name").val() + "</th>";
            row += "<th> " + $("#Ao").val() + "</th>";
            row += "<th> " + $("#DC").val() + "</th>";
            row += "<th> " + $("#NTT").val() + "</th>";
            row += "<th> " + $("#SDT").val() + "</th>";
            row += "<th> " + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide")
        }
    })

})