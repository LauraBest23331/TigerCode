


  $(document).ready(function(){
    let list = []
    $(".btn").click(function(){
        list = []
        let _key = $('#exampleInputName2').val()
        console.log(_key[0]);
        let mode = $('.form-check-input').is(':checked'); 
        console.log(mode);
        if (mode) {
          axios.post('https://tiger-code.com/api/diction/search', {
            key: _key
          })
          .then( (res)=> {
            if (res.data.code != 200) {
                console.log('查找失败！原因：查无此码');
                alert('查找失败！原因：查无此码')
                return
            }
            
            let _ordata = res.data.codeInfo
            list.push(
              _ordata
            )
            let htmlCode = ''
            for (let i = 0 ; i < list.length; i++) {
                htmlCode += `
                <div class="result-box">
                <div>
                <div><span class="fc-gray">字头：</span><span class="fb-6">${list[i].org}</span></div>
                <div><span class="fc-gray">编码：</span><span class="fb-6">${list[i].code}</span></div>
                <div><span class="fc-gray">拆分：</span><span class="fb-6">${list[i].diff}</span></div>
                <div><span class="fc-gray">拼音：</span><span class="fb-6">${list[i].py}</span></div>
                <div><span class="fc-gray">U 码：</span><span class="fb-6">${list[i].uini}</span></div>


                <div><span class="fc-gray"> 字统：</span><span class="fb-6"><a href="${list[i].zits}" target="_blank" >查看字统</a></span></div>
                <div><span class="fc-gray">叶典：</span><span class="fb-6"><a href="${list[i].yedm}" target="_blank" >查看叶典</a></span></div>
              

                     </div>
                     </div>
                `
            }
            $('.result').html(htmlCode)
          })
        }else
        for (let i = 0 ; i < _key.length; i++) {
            axios.post('https://tiger-code.com/api/diction/search', {
                key: _key[i]
              })
              .then( (res)=> {
                if (res.data.code != 200) {
                    console.log('查找失败！原因：查无此码');
                    alert('查找失败！原因：查无此码')
                    return
                }
                
                let _ordata = res.data.codeInfo
                list.push(
                  _ordata
                )
                let htmlCode = ''
                for (let i = 0 ; i < list.length; i++) {
                    htmlCode += `
                    <div class="result-box">
                    <div>
                    <div><span class="fc-gray">字头：</span><span class="fb-6">${list[i].org}</span></div>
                    <div><span class="fc-gray">编码：</span><span class="fb-6">${list[i].code}</span></div>
                    <div><span class="fc-gray">拆分：</span><span class="fb-6">${list[i].diff}</span></div>
                    <div><span class="fc-gray">拼音：</span><span class="fb-6">${list[i].py}</span></div>
                    <div><span class="fc-gray">U 码：</span><span class="fb-6">${list[i].uini}</span></div>
  

                    <div><span class="fc-gray"> 字统：</span><span class="fb-6"><a href="${list[i].zits}" target="_blank" >查看字统</a></span></div>
                    <div><span class="fc-gray">叶典：</span><span class="fb-6"><a href="${list[i].yedm}" target="_blank" >查看叶典</a></span></div>
                  

                         </div>
                         </div>
                    `
                }
                $('.result').html(htmlCode)
              })
        }
        
    });
    $("input").keydown(function(event){
      if (event.which == 13) {
        list = []
        let _key = $('#exampleInputName2').val()
        console.log(_key[0]);
        let mode = $('.form-check-input').is(':checked'); 
        console.log(mode);
        if (mode) {
          axios.post('https://tiger-code.com/api/diction/search', {
            key: _key
          })
          .then( (res)=> {
            if (res.data.code != 200) {
                console.log('查找失败！原因：查无此码');
                alert('查找失败！原因：查无此码')
                return
            }
            
            let _ordata = res.data.codeInfo
            list.push(
              _ordata
            )
            let htmlCode = ''
            for (let i = 0 ; i < list.length; i++) {
                htmlCode += `
                <div class="result-box">
                <div>
                <div><span class="fc-gray">字头：</span><span class="fb-6">${list[i].org}</span></div>
                <div><span class="fc-gray">编码：</span><span class="fb-6">${list[i].code}</span></div>
                <div><span class="fc-gray">拆分：</span><span class="fb-6">${list[i].diff}</span></div>
                <div><span class="fc-gray">拼音：</span><span class="fb-6">${list[i].py}</span></div>
                <div><span class="fc-gray">U 码：</span><span class="fb-6">${list[i].uini}</span></div>


                <div><span class="fc-gray"> 字统：</span><span class="fb-6"><a href="${list[i].zits}" target="_blank" >查看字统</a></span></div>
                <div><span class="fc-gray">叶典：</span><span class="fb-6"><a href="${list[i].yedm}" target="_blank" >查看叶典</a></span></div>
              

                     </div>
                     </div>
                `
            }
            $('.result').html(htmlCode)
          })
        }else
        for (let i = 0 ; i < _key.length; i++) {
            axios.post('https://tiger-code.com/api/diction/search', {
                key: _key[i]
              })
              .then( (res)=> {
                if (res.data.code != 200) {
                    console.log('查找失败！原因：查无此码');
                    alert('查找失败！原因：查无此码')
                    return
                }
                
                let _ordata = res.data.codeInfo
                list.push(
                  _ordata
                )
                let htmlCode = ''
                for (let i = 0 ; i < list.length; i++) {
                    htmlCode += `
                    <div class="result-box">
                    <div>
                    <div><span class="fc-gray">字头：</span><span class="fb-6">${list[i].org}</span></div>
                    <div><span class="fc-gray">编码：</span><span class="fb-6">${list[i].code}</span></div>
                    <div><span class="fc-gray">拆分：</span><span class="fb-6">${list[i].diff}</span></div>
                    <div><span class="fc-gray">拼音：</span><span class="fb-6">${list[i].py}</span></div>
                    <div><span class="fc-gray">U 码：</span><span class="fb-6">${list[i].uini}</span></div>
  

                    <div><span class="fc-gray"> 字统：</span><span class="fb-6"><a href="${list[i].zits}" target="_blank" >查看字统</a></span></div>
                    <div><span class="fc-gray">叶典：</span><span class="fb-6"><a href="${list[i].yedm}" target="_blank" >查看叶典</a></span></div>
                  

                         </div>
                         </div>
                    `
                }
                $('.result').html(htmlCode)
              })
        }
        
     
          }
    });
  });