
  $(document).ready(function(){
    const that = this
    $('.join-btn').change(function(e){

        console.log(e.currentTarget.files);
        let file = e.currentTarget.files[0]
        var reader = new FileReader();
        let fileName = e.currentTarget.files[0].name
        reader.readAsText(file);//发起异步请求
        let name = fileName.split('.')[0];

        reader.onload = function(){
          //读取完成后，数据保存在对象的result属性中
          let result = this.result;
          let lines = result.split('\n');
  
          let lineList = [];
          for (let i = 0; i < lines.length; i++) {
              let list = lines[i].split('\t');
              if (list.length >= 2) {
                  let zi = list[0];
                  if (zi.length < 2) {
                      lineList.push(lines[i])
                  }
              }
          }
          console.log(name);
          console.log(lineList);

          $.ajax({
            type: "POST",
            url: "http://49.232.7.128/assess",
            // url: "http://localhost/assess",
            dataType: 'json',
            data: {
                content: lineList,
                type: 'char',
                schema: name
            },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (res) {
                let code = res["code"];
                let msg = res["msg"];
                if (code !== 0) {
                    alert(msg);
                } else {
                    console.log(res.data);
                    // let data = res["data"];
                    // showEle.innerHTML = data["result"];
                    $('#text').html(res.data.result)
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
        //   var config = {
        //     method: 'post',
        //     url: 'http://49.232.7.128/assess',
        //     headers: { 
        //     },
        //     data : data
        //  };
         
        //  axios(config)
        //  .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //  })
        //  .catch(function (error) {
        //     console.log(error);
        //  });
         
        //   axios({
        //     method: 'post',
        //     url: 'http://49.232.7.128/assess/',
        //     data: {
        //         type: 'char',
        //         schema: name,
        //         content: lineList
        //     },
        //     withCredentials: true,
        //     dataType: 'json'
        //   }).then(res=>{
        //     console.log(res);
        //   })

        }
        
    })

  })

//   function showPreview(source) {
//     var input = source
//     var reader = new FileReader();
//     console.log(input.files[0])

//     reader.readAsText(input.files[0]);//发起异步请求
//     reader.onload = function(){
//       //读取完成后，数据保存在对象的result属性中
//       console.log(this.result)
//     }

// }



