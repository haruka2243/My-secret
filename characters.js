const characters = [
    ["忌炎", "忌炎.webp", 5, "気動", "長刃"],
    ["吟霖", "吟霖.webp", 5, "電導", "増幅器"],
    ["今汐", "今汐.webp", 5, "回折", "長刃"],
    ["長離", "長離.webp", 5, "焦熱", "迅刀"],
    ["折枝", "折枝.webp", 5, "凝縮", "増幅器"],
    ["相里要", "相里要.webp", 5, "電導", "手甲"],
    ["ショアキーパー", "ショアキーパー.webp", 5, "回折", ""],
    ["ツバキ", "ツバキ.webp", 5, "消滅", "迅刀"],
    ["カルロッタ", "カルロッタ.webp", 5, "凝縮", "拳銃"],
    ["ロココ", "ロココ.webp", 5, "消滅", ""],
    ["フィービー", "フィービー.webp", 5, "回折", ""],
    ["ブラント", "ブラント.webp", 5, "焦熱", ""],
    ["カンタレラ", "カンタレラ.png", 5, "消滅", ""],
    ["ザンニー", "ザンニー.webp", 5, "回折", ""],
    ["シャコンヌ", "シャコンヌ.webp", 5, "気動", ""],
    ["カルテジア", "カルテジア.webp", 5, "気動", ""],
    ["ルパ", "ルパ.webp", 5, "焦熱", ""],
    ["フローヴァ", "フローヴァ.png", 5, "消滅", ""],
    ["オーガスタ", "オーガスタ.webp", 5, "電導", ""],
    ["ユーノ", "ユーノ.webp", 5, "気動", ""],
    ["ガルブレーナ", "ガルブレーナ.webp", 5, "焦熱", ""],
    ["仇遠", "仇遠.webp", 5, "気動", ""],
    ["千咲", "千咲.webp", 5, "消滅", ""],
    ["リンネー", "リンネー.webp", 5, "回折", ""],
    ["モーニエ", "モーニエ.webp", 5, "焦熱", ""],
    ["エイメス", "エイメス.webp", 5, "焦熱", ""],
    ["リューク・ヘルセン", "リューク・ヘルセン.webp", 5, "回折", ""],
    ["シグリカ", "シグリカ.webp", 5, "気動", ""],
    ["緋雪", "緋雪.png", 5, "凝縮", ""],
    ["ダーニャ", "ダーニャ.webp", 5, "焦熱", ""],
    ["レベッカ", "レベッカ.png", 5, "電導", ""],
    ["ルーシー", "ルーシー.png", 5, "回折", ""],
    ["ルシラー", "ルシラー.jpeg", 5, "凝縮", ""],
    ["秧秧・玄翎", "秧秧・玄翎.png", 5, "消滅", ""],
    ["穂穂", "穂穂.webp", 5, "凝縮", ""],
    ["清宵", "清宵.webp", 5, "気動", ""],
    ["景燃", "景燃.webp", 5, "焦熱", ""],
    ["鎖瞑", "鎖瞑.webp", 5, "電導", ""],
    ["心", "心.jpg", 5, "電導", ""],
    
    ["淵武", "淵武.webp", 4, "電導", ""],
    ["散華", "散華.webp", 4, "凝縮", ""],
    ["白芷", "白芷.webp", 4, "凝縮", ""],
    ["釉瑚", "釉瑚.webp", 4, "凝縮", ""],
    ["熾霞", "熾霞.webp", 4, "焦熱", ""],
    ["モルトフィー", "モルトフィー.webp", 4, "焦熱", ""],
    ["灯灯", "灯灯.webp", 4, "電導", ""],
    ["アールト", "アールト.png", 4, "気動", ""],
    ["卜霊", "卜霊.webp", 4, "電導", ""],
    ["秧秧", "秧秧.webp", 4, "気動", ""],
    ["桃祈", "桃祈.webp", 4, "消滅", ""],
    ["丹瑾", "丹瑾.webp", 4, "消滅", ""]
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
        const rarity = character[2];
        const attribute = character[3];
        const weapon = character[4];

        gallery.innerHTML += `
            <div class="card" onclick="showDetail(this)">
                
                <img src="${image}" alt="${name}">
                
                <div class="name">${name}</div>

                <div class="detail-tab">
                    <h3>${name}</h3>
                    <p>レア度：${"★".repeat(rarity)}</p>
                    <p>属性：${attribute}</p>
                    <p>武器：${weapon}</p>
                </div>

            </div>
        `;
    });
}


// 詳細タブを表示・非表示
function showDetail(card) {

    const detail = card.querySelector(".detail-tab");

    detail.classList.toggle("show");

}


// ★5 → ★4の順番で表示
displayCharacters("★5 キャラクター", fiveStar);
displayCharacters("★4 キャラクター", fourStar);
