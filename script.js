function hasil() {
    let nama1 = document.getElementById("nama1").value;
    let nama2 = document.getElementById("nama2").value;
    
    document.getElementById("nm1").innerHTML =nama1;
    document.getElementById("nm2").innerHTML =nama2;
    document.getElementById("persentase").innerHTML =Math.floor(Math.random() * 100)+"%" ;
};

$(function() {
   
    $(".btn").click(function() {
        let nama1 = document.getElementById("nama1").value;
        let nama2 = document.getElementById("nama2").value;
        if (nama1&&nama2!="") {
            hasil();
            $(".hasil").show(500);
            $(".hasil").css({'display' : 'block'});
        }
    });
});
