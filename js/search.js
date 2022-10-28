


  $(document).ready(function(){
    let list = []
    $(".btn").click(function(){
        list = []
        let _key = $('#exampleInputName2').val()
        for (let i = 0 ; i < _key.length; i++) {
            axios.post('http://124.71.20.246:3000/diction/search', {
                key: _key[i]
              })
              .then( (res)=> {
                if (res.data.code != 200) {
                    console.log('查找失败！原因：查无此码');
                    return
                }
                
                let _result = res.data.result
                let _ordata = res.data.ordata
                _result = _result.slice(1,_result.length-2)
                console.log(_result);
                let arrya = _result.split('·')
                console.log(arrya);
                list.push(
                    {
                        code: arrya[1],
                        idff: arrya[0],
                        name : _ordata
    
                    }
                )
                let htmlCode = ''
                for (let i = 0 ; i < list.length; i++) {
                    htmlCode += `
                    <div class="result-box">
                    <div>
                    <div><span class="fc-gray">原字：</span><span class="fb-6">${list[i].name}</span></div>
                    <div><span class="fc-gray">编码：</span><span class="fb-6">${list[i].code}</span></div>
                      <div><span class="fc-gray">拆分：</span><span class="fb-6">${list[i].idff}</span></div>
                         </div>
                         </div>
                    `
                }
                $('.result').html(htmlCode)
              })
        }
        
    });
  });