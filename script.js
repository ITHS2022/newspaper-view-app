/* function get() {// Get リクエスト
    return new Promise((resolve) => {
      fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=jox0Tqrhx2Zkls_L_LBT0Rn1L-a_9vL-oEz8PKPsAldrUaBs7RFQBaH5J0fdD9BVfhR7Vyppd3W94ya_vv-Zbvee7pvsfcxQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHOtqhlHf-_pcQGry6XEmPYa9m-YvrzRt7q6nHsxnvtXPoxOe27aTp435jR5AGiK2vYeYF9c7SRSIRlzbwCTVNfIlVkdo3Svwg&lib=M9yyJVzZ2VEOrPOuEMp-1m-L_9wHi5F6A`)
        .then(response => response.json())
        .then(data => {
            let result = document.getElementById('view_links');
            result.innerHTML = ""; //resultのHTMLを一度リセット
            
            for (var i = 0; i < data.main.length; i++){
                    const number = i+1; //新聞連番表示用 jsonが0から始まるので+1
                    result.insertAdjacentHTML('beforeend', `<div class="result"><div class="date">${data.main[i][0]}年${data.main[i][1]}月${data.main[i][2]}日発行</div><div class="title">生徒会新聞${number}</div><a href="javascript:location.href = 'viewpage.html?numb='+${number};"></a></div>`);
                }
            }
            )
        })
    } */
    function get() {// Get リクエスト
        return new Promise((resolve) => {
          fetch(`https://script.google.com/macros/s/AKfycby_qp-vUG4qe83Q_MhuELSLglk9tGHVxGwZT16KnmeRVooxVcUiJOLZCyqgC3xPHkcT/exec`)
            .then(response => response.json())
            .then(data => {
                let result = document.getElementById('view_links');
                result.innerHTML = ""; //resultのHTMLを一度リセット
                for (var i = 0; i < data.main.length; i++){
                        var cnt
                        var brcnum
                        if(cnt == null){
                            cnt = 0
                        }
                        if(brcnum == null){
                            brcnum = 1
                        }
                        const number = i+1; //新聞連番表示用 jsonが0から始まるので+1
                        
                        if(data.main[i][0] == cnt){
                            result.insertAdjacentHTML('beforeend',`<div class="result"><div class="info"><div class="date">${data.main[i][1]}月${data.main[i][2]}日発行</div><div class="number">生徒会新聞${data.main[i][0]}-${brcnum}</div></div><div class="title">${data.main[i][3]}</div><a href="javascript:location.href = 'viewpage.html?numb='+${number};"></a></div>`)
                            brcnum = brcnum + 1;
                        }else{
                            result.insertAdjacentHTML('beforeend', `<div class="result"><div class="info"><div class="date">${data.main[i][1]}月${data.main[i][2]}日発行</div><div class="number">生徒会新聞${data.main[i][0]}</div></div><div class="title">${data.main[i][3]}</div><a href="javascript:location.href = 'viewpage.html?numb='+${number};"></a></div>`);
                            cnt= cnt +1;
                            brcnum = 1;
                        }
                    }
                }
                )
            })
        }
