$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        $("body").append(`<div class="card" id="${data.results[0].id.value}"> Name: ${data.results[0].name.first} Email: ${data.results[0].email} </div>`)
      console.log(data.results[0].name.first);
      console.log(data.results[0].email)
      console.log(data.results[0].id.value)
    }
  });
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        $("body").append(`<div class="card" id="${data.results[0].id.value}"> Name: ${data.results[0].name.first} Email: ${data.results[0].email} </div>`)
      console.log(data.results[0].name.first);
      console.log(data.results[0].email)
      console.log(data.results[0].id.value)
    }
  });