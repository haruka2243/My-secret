const characters = [
    ["忌炎", "忌炎.webp", 5],
    ["吟霖", "吟霖.webp", 5],
    ["今汐", "今汐.webp", 5],
    ["長離", "長離.webp", 5],
    ["折枝", "折枝.webp", 5],
    ["相里要", "相里要.webp", 5],
    ["ショアキーパー", "ショアキーパー.webp", 5],
    ["ツバキ", "ツバキ.webp", 5],
    ["カルロッタ", "カルロッタ.webp", 5],
    ["ロココ", "ロココ.webp", 5],
    ["フィービー", "フィービー.jpg", 5],
    ["ブラント", "ブラント.webp", 5],
    ["カンタレラ", "カンタレラ.png", 5],
    ["ザンニー", "ザンニー.webp", 5],
    ["シャコンヌ", "シャコンヌ.webp", 5],
    ["カルテジア", "カルテジア.webp", 5],
    ["ルパ", "ルパ.webp", 5],
    ["フローヴァ", "フローヴァ.png", 5],
    ["オーガスタ", "オーガスタ.webp", 5],
    ["ユーノ", "ユーノ.webp", 5],
    ["ガルブレーナ", "ガルブレーナ.webp", 5],
    ["仇遠", "仇遠.webp", 5],
    ["千咲", "千咲.webp", 5],
    ["リンネー", "リンネー.webp", 5],
    ["モーニエ", "モーニエ.webp", 5],
    ["エイメス", "エイメス.webp", 5],
    ["リューク・ヘルセン", "リューク・ヘルセン.webp", 5],
    ["シグリカ", "シグリカ.webp", 5],
    ["緋雪", "緋雪.png", 5],
    ["ダーニャ", "ダーニャ.webp", 5],
    ["レベッカ", "レベッカ.png", 5],
    ["ルーシー", "ルーシー.png", 5],
    ["ルシラー", "ルシラー.webp", 5],
    ["秧秧・玄翎", "秧秧・玄翎.png", 5],
    ["穂穂", "穂穂.webp", 5],
    ["清宵", "清宵.webp", 5],
    ["景燃", "景燃.webp", 5],
    ["鎖瞑", "鎖瞑.webp", 5],
    ["心", "心.jpg", 5],
    
    ["淵武", "淵武.webp", 4],
    ["散華", "散華.webp", 4],
    ["白芷", "白芷.webp", 4],
    ["釉瑚", "釉瑚.webp", 4],
    ["熾霞", "熾霞.webp", 4],
    ["モルトフィー", "モルトフィー.webp", 4],
    ["灯灯", "灯灯.webp", 4],
    ["アールト", "アールト.webp", 4]
];

// HTMLのgalleryを取得
const gallery = document.getElementById("gallery");


// ★5と★4に分ける
const fiveStar = characters.filter(character => character[2] === 5);
const fourStar = characters.filter(character => character[2] === 4);


// キャラクターを表示する関数
function displayCharacters(title, characters) {

    // 見出し
    gallery.innerHTML += `
        <h2 class="section-title">${title}</h2>
    `;

    // キャラクター表示
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
