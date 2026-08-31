const characters = [
    ["忌炎", "忌炎.webp", ★★★★★],
    ["忌炎", "忌炎.webp", ★★★★★],
    ["吟霖", "吟霖.webp", ★★★★★],
    ["今汐", "今汐.webp", ★★★★★],
    ["長離", "長離.webp", ★★★★★],
    ["折枝", "折枝.webp", ★★★★★],
    ["相里要", "相里要.webp", ★★★★★],
    ["ショアキーパー", "ショアキーパー.webp", ★★★★★],
    ["ツバキ", "ツバキ.webp", ★★★★★],
    ["カルロッタ", "カルロッタ.webp", ★★★★★],
    ["ロココ", "ロココ.webp", ★★★★★],
    ["フィービー", "フィービー.jpg", ★★★★★],
    ["ブラント", "ブラント.webp", ★★★★★],
    ["カンタレラ", "カンタレラ.png", ★★★★★],
    ["ザンニー", "ザンニー.webp", ★★★★★],
    ["シャコンヌ", "シャコンヌ.webp", ★★★★★],
    ["カルテジア", "カルテジア.webp", ★★★★★],
    ["ルパ", "ルパ.webp", ★★★★★],
    ["フローヴァ", "フローヴァ.png", ★★★★★],
    ["オーガスタ", "オーガスタ.webp", ★★★★★],
    ["ユーノ", "ユーノ.webp", ★★★★★],
    ["ガルブレーナ", "ガルブレーナ.webp", ★★★★★],
    ["仇遠", "仇遠.webp", ★★★★★],
    ["千咲", "千咲.webp", ★★★★★],
    ["リンネー", "リンネー.webp", ★★★★★],
    ["モーニエ", "モーニエ.webp", ★★★★★],
    ["エイメス", "エイメス.webp", ★★★★★],
    ["リューク・ヘルセン", "リューク・ヘルセン.webp", ★★★★★],
    ["シグリカ", "シグリカ.webp", ★★★★★],
    ["緋雪", "緋雪.png", ★★★★★],
    ["ダーニャ", "ダーニャ.webp", ★★★★★],
    ["レベッカ", "レベッカ.png", ★★★★★],
    ["ルーシー", "ルーシー.png", ★★★★★],
    ["ルシラー", "ルシラー.webp", ★★★★★],
    ["秧秧・玄翎", "秧秧・玄翎.png", ★★★★★],
    ["穂穂", "穂穂.webp", ★★★★★],
    ["清宵", "清宵.webp", ★★★★★],
    ["景燃", "景燃.webp", ★★★★★],
    ["鎖瞑", "鎖瞑.webp", ★★★★★],
    ["心", "心.jpg", ★★★★★],
    
    ["淵武", "淵武.webp", ★★★★],
    ["散華", "散華.webp", ★★★★],
    ["白芷", "白芷.webp", ★★★★],
    ["釉瑚", "釉瑚.webp", ★★★★],
    ["熾霞", "熾霞.webp", ★★★★],
    ["モルトフィー", "モルトフィー.webp", ★★★★],
    ["灯灯", "灯灯.webp", ★★★★],
    ["アールト", "アールト.webp", ★★★★]
];

// HTMLのgalleryを取得
const gallery = document.getElementById("gallery");


// ★5と★4に分ける
const fiveStar = characters.filter(character => character[2] === 5);
const fourStar = characters.filter(character => character[2] === 4);


// キャラクターを表示する関数
function displayCharacters(title, characters) {

    gallery.innerHTML += `<h2>${title}</h2>`;

    characters.forEach(character => {

        const name = character[0];
        const image = character[1];

        gallery.innerHTML += `
            <div class="card">
                <img src="${image}" alt="${name}">
                <div class="name">${name}</div>
            </div>
        `;
    });
}


// ★5 → ★4の順番で表示
displayCharacters("★5 キャラクター", fiveStar);
displayCharacters("★4 キャラクター", fourStar);
