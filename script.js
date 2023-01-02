var url="localhost:8000";

function get() {// Get リクエスト
      fetch(`https://script.google.com/macros/s/AKfycbw0fFqLFX9tY_7t1EiJi1Mo2qJHS_HN_r4c8dffjbPX8llFGTGvN5l8w6f5I8ec7mLG/exec`,{mode:"no-cors"})
        .then(response => response.json())
        .then(data => {
            let result = document.getElementById('view_links');
            result.innerHTML = "";
            for (var i = 0; i < data.main.length; i++){
                    result.insertAdjacentHTML('beforeend', `<div class="result">jsonデータ${data.main[i][0]}年${data.main[i][1]}月${data.main[i][2]}日発行</div>`);
                }
            })
        }