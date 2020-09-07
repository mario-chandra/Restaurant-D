async function getData() {
    return await axios.get('http://the19am.com/uph/json/?p=restaurant');
}

$('#menu-makanan').ready(async function () {
    let datas = await getData();
    console.log(datas)
    datas.data.forEach((data, idx) => {
        $(`#menu-makanan`).append(`
            <div class="menu-sub">
              <h2></h2>
            </div>
            <div class="menu-food">
              <p>${data.nama_produk} . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . .${data.price}</p>
              <small>${data.desc}</small>
            </div>
        `)
    })
})

$('#menu-makanan-promo').ready(async function () {
    let datas = await getData();
    console.log(datas)
    datas.data.forEach((data, idx) => {
      if(idx<3){
        $(`#menu-makanan-promo`).append(`
            <div class="menu-sub">
              <h2></h2>
            </div>
            <div class="menu-food">
              <p>${data.nama_produk}.............................................................................<del>${data.price}</del>  ${data.price*9/10}</p>
              <br><small>${data.desc}</small>
            </div>
        `)
      }
    })
})

function buttononclick(){
    window.location="promo.html"
}
