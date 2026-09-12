const characters = [
    ["忌炎", "星5キャラ画像/忌炎.webp", 5, "気動", "長刃", "蒼鱗連峰", "武器画像/蒼鱗連峰.webp", "キャラ画像大/忌炎大.jpg"],
    ["吟霖", "星5キャラ画像/吟霖.webp", 5, "電導", "増幅器", "糸繰りの奇術", "武器画像/糸繰りの奇術.webp", "キャラ画像大/吟霖大.jpg"],
    ["今汐", "星5キャラ画像/今汐.webp", 5, "回折", "長刃", "歳華調和", "武器画像/歳華調和.webp", "キャラ画像大/今汐大.png"],
    ["長離", "星5キャラ画像/長離.webp", 5, "焦熱", "迅刀", "赫く燃ゆる流光", "武器画像/赫く燃ゆる流光.webp", "キャラ画像大/長離大.jpg"],
    ["折枝", "星5キャラ画像/折枝.webp", 5, "凝縮", "増幅器", "氷華の雅印", "武器画像/氷華の雅印.webp", "キャラ画像大/折枝大.jpg"],
    ["相里要", "星5キャラ画像/相里要.webp", 5, "電導", "手甲", "万端の枢機", "武器画像/万端の枢機.webp", "キャラ画像大/相里要大.jpeg"],
    ["ショアキーパー", "星5キャラ画像/ショアキーパー.webp", 5, "回折", "増幅器", "星々のコンチェルト", "武器画像/星々のコンチェルト.webp", "キャラ画像大/ショアキーパー大.jpg"],
    ["ツバキ", "星5キャラ画像/ツバキ.webp", 5, "消滅", "迅刀", "春裁ち", "武器画像/春裁ち.webp", "キャラ画像大/ツバキ大."],
    ["カルロッタ", "星5キャラ画像/カルロッタ.webp", 5, "凝縮", "拳銃", "ラストダンス", "武器画像/ラストダンス.webp", "キャラ画像大/カルロッタ大."],
    ["ロココ", "星5キャラ画像/ロココ.webp", 5, "消滅", "手甲", "トラジコメーディア", "武器画像/トラジコメーディア.webp", "キャラ画像大/ロココ大."],
    ["フィービー", "星5キャラ画像/フィービー.webp", 5, "回折", "増幅器", "光のハルモニア", "武器画像/光のハルモニア.webp", "キャラ画像大/フィービー大."],
    ["ブラント", "星5キャラ画像/ブラント.webp", 5, "焦熱", "迅刀", "エンドレスボヤージュ", "武器画像/エンドレスボヤージュ.webp", "キャラ画像大/ブラント大."],
    ["カンタレラ", "星5キャラ画像/カンタレラ.png", 5, "消滅", "増幅器", "深海の囁き", "武器画像/深海の囁き.webp", "キャラ画像大/カンタレラ大."],
    ["ザンニー", "星5キャラ画像/ザンニー.webp", 5, "回折", "手甲", "焔光の裁き", "武器画像/焔光の裁き.webp", "キャラ画像大/ザンニー大."],
    ["シャコンヌ", "星5キャラ画像/シャコンヌ.webp", 5, "気動", "拳銃", "森のアリア", "武器画像/森のアリア.webp", "キャラ画像大/シャコンヌ大."],
    ["カルテジア", "星5キャラ画像/カルテジア.webp", 5, "気動", "迅刀", "定めを覆す荊冠", "武器画像/定めを覆す荊冠.webp", "キャラ画像大/カルテジア大.webp"],
    ["ルパ", "星5キャラ画像/ルパ.webp", 5, "焦熱", "長刃", "闘炎の爪痕", "武器画像/闘炎の爪痕.webp", "キャラ画像大/ルパ大."],
    ["フローヴァ", "星5キャラ画像/フローヴァ.png", 5, "消滅", "増幅器", "幽冥の忘憂曲", "武器画像/幽冥の忘憂曲.webp", "キャラ画像大/フローヴァ大."],
    ["オーガスタ", "星5キャラ画像/オーガスタ.webp", 5, "電導", "長刃", "雷霆を統べし王剣", "武器画像/雷霆を統べし王剣.webp", "キャラ画像大/オーガスタ大."],
    ["ユーノ", "星5キャラ画像/ユーノ.webp", 5, "気動", "手甲", "万物を書き留める月相", "武器画像/万物を書き留める月相.webp", "キャラ画像大/ユーノ大.jpg"],
    ["ガルブレーナ", "星5キャラ画像/ガルブレーナ.webp", 5, "焦熱", "拳銃", "ルクス＆アンブラ", "武器画像/ルクス＆アンブラ.webp", "キャラ画像大/ガルブレーナ大."],
    ["仇遠", "星5キャラ画像/仇遠.webp", 5, "気動", "迅刀", "破敵の鋭竹", "武器画像/破敵の鋭竹.webp", "キャラ画像大/仇遠大."],
    ["千咲", "星5キャラ画像/千咲.webp", 5, "消滅", "長刃", "曇斬", "武器画像/曇斬.webp", "キャラ画像大/千咲大."],
    ["リンネー", "星5キャラ画像/リンネー.webp", 5, "回折", "拳銃", "スペクトル・ブラスター", "武器画像/スペクトル・ブラスター.webp", "キャラ画像大/リンネー大."],
    ["モーニエ", "星5キャラ画像/モーニエ.webp", 5, "焦熱", "長刃", "スターキャリブレーター", "武器画像/スターキャリブレーター.webp", "キャラ画像大/モーニエ大."],
    ["エイメス", "星5キャラ画像/エイメス.webp", 5, "焦熱", "迅刀", "とこしえの明星", "武器画像/とこしえの明星.webp", "キャラ画像大/エイメス大.webp"],
    ["リューク・ヘルセン", "星5キャラ画像/リューク・ヘルセン.webp", 5, "回折", "手甲", "デイブレイカースパイン", "武器画像/デイブレイカースパイン.webp", "キャラ画像大/リューク・ヘルセン大."],
    ["シグリカ", "星5キャラ画像/シグリカ.webp", 5, "気動", "手甲", "ソル・スウォーンの注釈", "武器画像/ソル・スウォーンの注釈.webp", "キャラ画像大/シグリカ大."],
    ["緋雪", "星5キャラ画像/緋雪.png", 5, "凝縮", "迅刀", "灼霜", "武器画像/灼霜.webp", "キャラ画像大/緋雪大."],
    ["ダーニャ", "星5キャラ画像/ダーニャ.webp", 5, "焦熱", "増幅器", "偽物の矮星", "武器画像/偽物の矮星.webp", "キャラ画像大/ダーニャ大."],
    ["レベッカ", "星5キャラ画像/レベッカ.png", 5, "電導", "拳銃", "スカル・ポッパー", "武器画像/スカル・ポッパー.webp", "キャラ画像大/レベッカ大."],
    ["ルーシー", "星5キャラ画像/ルーシー.png", 5, "回折", "拳銃", "スペクトラル・トリガー", "武器画像/スペクトラル・トリガー.webp", "キャラ画像大/ルーシー大."],
    ["ルシラー", "星5キャラ画像/ルシラー.jpeg", 5, "凝縮", "増幅器", "フリーズフレーム", "武器画像/フリーズフレーム.webp", "キャラ画像大/ルシラー大."],
    ["秧秧・玄翎", "星5キャラ画像/秧秧・玄翎.png", 5, "消滅", "迅刀", "天つ蒼淵", "武器画像/天つ蒼淵.webp", "キャラ画像大/秧秧・玄翎大."],
    ["穂穂", "星5キャラ画像/穂穂.webp", 5, "凝縮", "増幅器", "夕霞の飲露", "武器画像/夕霞の飲露.webp", "キャラ画像大/穂穂大."],
    ["清宵", "星5キャラ画像/清宵.webp", 5, "気動", "迅刀", "雲琅", "武器画像/雲琅.webp", "キャラ画像大/清宵大."],
    ["景燃", "星5キャラ画像/景燃.webp", 5, "焦熱", "長刃", "幾千の導き", "武器画像/幾千の導き.webp", "キャラ画像大/景燃大."],
    ["鎖瞑", "星5キャラ画像/鎖瞑.webp", 5, "電導", "迅刀", "不明", "武器画像/不明.webp", "キャラ画像大/鎖瞑大."],
    ["心", "星5キャラ画像/心.jpg", 5, "電導", "増幅器", "不明", "武器画像/不明.webp", "キャラ画像大/心大."],
    
    ["淵武", "星4キャラ画像/淵武.webp", 4, "電導", "手甲", "キャラ画像大/淵武大."],
    ["散華", "星4キャラ画像/散華.webp", 4, "凝縮", "迅刀", "キャラ画像大/散華大."],
    ["白芷", "星4キャラ画像/白芷.webp", 4, "凝縮", "増幅器", "キャラ画像大/白芷大."],
    ["釉瑚", "星4キャラ画像/釉瑚.webp", 4, "凝縮", "手甲", "キャラ画像大/釉瑚大."],
    ["熾霞", "星4キャラ画像/熾霞.webp", 4, "焦熱", "拳銃", "キャラ画像大/熾霞大."],
    ["モルトフィー", "星4キャラ画像/モルトフィー.webp", 4, "焦熱", "拳銃", "キャラ画像大/モルトフィー大."],
    ["灯灯", "星4キャラ画像/灯灯.webp", 4, "電導", "長刃", "キャラ画像大/灯灯大."],
    ["アールト", "星4キャラ画像/アールト.png", 4, "気動", "拳銃", "キャラ画像大/アールト大."],
    ["卜霊", "星4キャラ画像/卜霊.webp", 4, "電導", "増幅器", "キャラ画像大/卜霊大."],
    ["秧秧", "星4キャラ画像/秧秧.webp", 4, "気動", "迅刀", "キャラ画像大/秧秧大."],
    ["桃祈", "星4キャラ画像/桃祈.webp", 4, "消滅", "長刃", "キャラ画像大/桃祈大."],
    ["丹瑾", "星4キャラ画像/丹瑾.webp", 4, "消滅", "迅刀", "キャラ画像大/丹瑾大."]
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
        const attribute = charactr[4];
        const weapon = character[5];
        const mochiWeapon = character[6];
        const mochiWeaponImage = character[7];
        const characterLargeImage = character[8];

        gallery.innerHTML += `
            <div class="card" onclick="showDetail(this)">
                
                <img src="${image}" alt="${name}">
                
                <div class="name" onclick="showCharacterImage(event, '${characterLargeImage}')">
                    ${name}
                </div>

                <div class="detail-tab">
                    <h3>${name}</h3>
                    <p>レア度：${"★".repeat(rarity)}</p>
                    <p>属性：${attribute}</p>
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

                <div class="character-large-image"></div>
                
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

    // 画像が表示されていたら消す
    if (weaponImage.innerHTML !== "") {
        weaponImage.innerHTML = "";
    }
    // 表示されていなければ表示する
    else {
        weaponImage.innerHTML = `
            <img src="${image}" alt="武器">
        `;
    }
}

function showCharacterImage(event, image) {
    event.stopPropagation();

    const card = event.target.closest(".card");
    const largeImage = card.querySelector(".character-large-image");

    if (largeImage.innerHTML !== "") {
        // 画像を消す
        largeImage.innerHTML = "";
        card.classList.remove("large-open");
    } else {
        // 画像を表示
        largeImage.innerHTML = `
            <img src="${image}" alt="キャラクター画像">
        `;

        card.classList.add("large-open");
    }
}

// ★5 → ★4の順番で表示
displayCharacters("★5 キャラクター", fiveStar);
displayCharacters("★4 キャラクター", fourStar);
