function hasil() {
    let nama1 = document.getElementById("nama1").value;
    let nama2 = document.getElementById("nama2").value;
    document.getElementById("hasil").innerHTML = nama1 + nama2 + Math.floor(Math.random() * 100) ;
};

$(function() {
    $(".btn").click(function() {
        hasil();
        $(".hasil").slideToggle(500);
    });
});