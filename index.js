
function tampilkanSemuaMenu(){
  $("#daftar-menu").html("");
  $.getJSON('data/menu.json', function(data) {
      // console.log(data);
      let daftarMenu = data.menu;
      // console.log(daftarMenu)
      $.each(daftarMenu, function(i, dataMenu) {
          // console.log(i);
          $('#daftar-menu').append(`<div class="col-md-4">
          <div class="card mt-3">
              <img src="gambar/${dataMenu.gambar}" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${dataMenu.nama}</h5>
                  <p class="card-text">${dataMenu.deskripsi}</p>
                  <h5 class="card-title">${dataMenu.harga}</h5>
                  <a href="#" class="btn btn-primary">Pesan Sekarang</a>
              </div>
          </div>
      </div>`)
      })
  })
}
tampilkanSemuaMenu();

$(".nav-link").on("click", function() {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if(kategori == 'All Menu'){
      tampilkanSemuaMenu();
      return;
  }
  $.getJSON('data/menu.json', function(data) {
      const menu = data.menu;
      let tampilData = "";
      $.each(menu, function(i,dataMenu){
          if(dataMenu.kategori == kategori.toLowerCase()){
              tampilData += `<div class="col-md-4">
              <div class="card mt-3">
                  <img src="gambar/${dataMenu.gambar}" class="card-img-top">
                  <div class="card-body">
                      <h5 class="card-title">${dataMenu.nama}</h5>
                      <p class="card-text">${dataMenu.deskripsi}</p>
                      <h5 class="card-title">${dataMenu.harga}</h5>
                      <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                  </div>
              </div>
          </div>`;
          }
      });
      $("#daftar-menu").html(tampilData);
  })
})
