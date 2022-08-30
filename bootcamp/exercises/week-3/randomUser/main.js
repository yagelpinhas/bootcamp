$.ajax({
    url: 'https://randomuser.me/api/?results=5',
    dataType: 'json',
    success: function(data) {
      for(let i=0;i<16;i++){
        $("#container").append(`<div class="card">
         <div> Name: ${data.results[i].name.first}  </div>
          <div> Email: ${data.results[i].email}</div>
           </div>`)
      }
      console.log(data.results[0].name.first);
      console.log(data.results[0].email)
      console.log(data.results[0].id.value)
      console.log(data.results[1].name.first);
      console.log(data.results[1].email)
      console.log(data.results[1].id.value)
    }
  });