const button = document.getElementById('adminersview');
const item = document.getElementById('adminers');

button.addEventListener('click', () => {
if (item.style.display === 'none') {
    // 非表示なら表示する
    item.style.display = 'flex';
    button.textContent = "運営陣を非表示▼";
} else {
    // 表示されているなら非表示にする
    item.style.display = 'none';
    button.textContent = "運営陣を表示▲";
}
});

async function fetchServerStatus() {
    const statuses = document.getElementById("status_online");
    const details = document.getElementById("status_detail");
    const members = document.getElementById("status_members");
    fetch("https://api.mcsrvstat.us/3/sacra.wata777.f5.si")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.online){
                statuses.textContent = "起動中";
                statuses.style.color = "#25b138";
                members.textContent = data.players.online;
                details.style.display = "block";
            }else{
                statuses.textContent = "オフライン";
                statuses.style.color = "#d32626";
                details.style.display = "none";
            }
        })
        .catch(error => {
            console.error("取得エラー:", error);
        });
}
  
fetchServerStatus();
