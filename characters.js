const characters = [
    ["忌炎", "忌炎.webp", 5, "気動", "長刃", "蒼鱗連峰", "蒼鱗連峰.webp"],
    ["吟霖", "吟霖.webp", 5, "電導", "増幅器", "糸繰りの奇術", "糸繰りの奇術.webp"],
    ["今汐", "今汐.webp", 5, "回折", "長刃", "歳華調和", "歳華調和.webp"],
    ["長離", "長離.webp", 5, "焦熱", "迅刀", "赫く燃ゆる流光", "赫く燃ゆる流光.webp"],
    ["折枝", "折枝.webp", 5, "凝縮", "増幅器", "氷華の雅印", "氷華の雅印.webp"],
    ["相里要", "相里要.webp", 5, "電導", "手甲", "万端の枢機", "万端の枢機.webp"],
    ["ショアキーパー", "ショアキーパー.webp", 5, "回折", "増幅器", "星々のコンチェルト", "星々のコンチェルト.webp"],
    ["ツバキ", "ツバキ.webp", 5, "消滅", "迅刀", "春裁ち", "春裁ち.webp"],
    ["カルロッタ", "カルロッタ.webp", 5, "凝縮", "拳銃", "ラストダンス", "ラストダンス.webp"],
    ["ロココ", "ロココ.webp", 5, "消滅", "手甲", "トラジコメーディア", "トラジコメーディア.webp"],
    ["フィービー", "フィービー.webp", 5, "回折", "増幅器", "光のハルモニア", "光のハルモニア.webp"],
    ["ブラント", "ブラント.webp", 5, "焦熱", "迅刀", "エンドレスボヤージュ", "エンドレスボヤージュ.webp"],
    ["カンタレラ", "カンタレラ.png", 5, "消滅", "増幅器", "深海の囁き", "深海の囁き.webp"],
    ["ザンニー", "ザンニー.webp", 5, "回折", "手甲", "焔光の裁き", "焔光の裁き.webp"],
    ["シャコンヌ", "シャコンヌ.webp", 5, "気動", "拳銃", "森のアリア", "森のアリア.webp"],
    ["カルテジア", "カルテジア.webp", 5, "気動", "迅刀", "定めを覆す荊冠", "定めを覆す荊冠.webp"],
    ["ルパ", "ルパ.webp", 5, "焦熱", "長刃", "闘炎の爪痕", "闘炎の爪痕.webp"],
    ["フローヴァ", "フローヴァ.png", 5, "消滅", "増幅器", "幽冥の忘憂曲", "幽冥の忘憂曲.webp"],
    ["オーガスタ", "オーガスタ.webp", 5, "電導", "長刃", "雷霆を統べし王剣", "雷霆を統べし王剣.webp"],
    ["ユーノ", "ユーノ.webp", 5, "気動", "手甲", "	万物を書き留める月相", "万物を書き留める月相.webp"],
    ["ガルブレーナ", "ガルブレーナ.webp", 5, "焦熱", "拳銃", "ルクス＆アンブラ", "ルクス＆アンブラ.webp"],
    ["仇遠", "仇遠.webp", 5, "気動", "迅刀", "破敵の鋭竹", "破敵の鋭竹.webp"],
    ["千咲", "千咲.webp", 5, "消滅", "長刃", "曇斬", "曇斬.webp"],
    ["リンネー", "リンネー.webp", 5, "回折", "拳銃", "スペクトル・ブラスター", "スペクトル・ブラスター.webp"],
    ["モーニエ", "モーニエ.webp", 5, "焦熱", "長刃", "スターキャリブレーター", "スターキャリブレーター.webp"],
    ["エイメス", "エイメス.webp", 5, "焦熱", "迅刀", "とこしえの明星", "とこしえの明星.webp"],
    ["リューク・ヘルセン", "リューク・ヘルセン.webp", 5, "回折", "手甲", "デイブレイカースパイン", "デイブレイカースパイン.webp"],
    ["シグリカ", "シグリカ.webp", 5, "気動", "手甲", "ソル・スウォーンの注釈", "ソル・スウォーンの注釈.webp"],
    ["緋雪", "緋雪.png", 5, "凝縮", "迅刀", "灼霜", "灼霜.webp"],
    ["ダーニャ", "ダーニャ.webp", 5, "焦熱", "増幅器", "偽物の矮星", "偽物の矮星.webp"],
    ["レベッカ", "レベッカ.png", 5, "電導", "拳銃", "スカル・ポッパー", "スカル・ポッパー.webp"],
    ["ルーシー", "ルーシー.png", 5, "回折", "拳銃", "スペクトラル・トリガー", "スペクトラル・トリガー.webp"],
    ["ルシラー", "ルシラー.jpeg", 5, "凝縮", "増幅器", "フリーズフレーム", "フリーズフレーム.webp"],
    ["秧秧・玄翎", "秧秧・玄翎.png", 5, "消滅", "迅刀", "天つ蒼淵", "天つ蒼淵.webp"],
    ["穂穂", "穂穂.webp", 5, "凝縮", "増幅器", "夕霞の飲露", "夕霞の飲露.webp"],
    ["清宵", "清宵.webp", 5, "気動", "迅刀", "雲琅", "雲琅.webp"],
    ["景燃", "景燃.webp", 5, "焦熱", "長刃", "幾千の導き", "幾千の導き.webp"],
    ["鎖瞑", "鎖瞑.webp", 5, "電導", "迅刀", "不明", "不明.webp"],
    ["心", "心.jpg", 5, "電導", "増幅器", "不明", "不明.webp"],
    
    ["淵武", "淵武.webp", 4, "電導", "手甲", ""],
    ["散華", "散華.webp", 4, "凝縮", "迅刀", ""],
    ["白芷", "白芷.webp", 4, "凝縮", "増幅器", ""],
    ["釉瑚", "釉瑚.webp", 4, "凝縮", "手甲", ""],
    ["熾霞", "熾霞.webp", 4, "焦熱", "拳銃", ""],
    ["モルトフィー", "モルトフィー.webp", 4, "焦熱", "拳銃", ""],
    ["灯灯", "灯灯.webp", 4, "電導", "長刃", ""],
    ["アールト", "アールト.png", 4, "気動", "拳銃", ""],
    ["卜霊", "卜霊.webp", 4, "電導", "増幅器", ""],
    ["秧秧", "秧秧.webp", 4, "気動", "迅刀", ""],
    ["桃祈", "桃祈.webp", 4, "消滅", "長刃", ""],
    ["丹瑾", "丹瑾.webp", 4, "消滅", "迅刀", ""]
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
        const mochiWeapon = character[5];
        const mochiWeaponImage = character[6];

        gallery.innerHTML += `
            <div class="card" onclick="showDetail(this)">
                
                <img src="${image}" alt="${name}">
                
                <div class="name">${name}</div>

                <div class="detail-tab">
                    <h3>${name}</h3>
                    <p>レア度：${"★".repeat(rarity)}</p>
                    <p>武器：${weapon}</p>
                    ${rarity === 5 ? `
                    <p>餅武器：
                        <span class="weapon-name" onclick="showWeapon(event, this, '${mochiWeaponImage}')">
                            ${mochiWeapon}
                        </span>
                    </p>

                    <div class="weapon-image"></div>
                    ` : ""}

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

function showWeapon(event, weaponName, image) {
    event.stopPropagation();

    const weaponImage = weaponName
        .closest(".detail-tab")
        .querySelector(".weapon-image");

    weaponImage.innerHTML = `
        <img src="${image}" alt="武器">
    `;
}

// ★5 → ★4の順番で表示
displayCharacters("★5 キャラクター", fiveStar);
displayCharacters("★4 キャラクター", fourStar);
