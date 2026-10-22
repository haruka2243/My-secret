const characters = [
    ["忌炎", "星5キャラ画像/忌炎.webp", 5, "気動", "長刃", "蒼鱗連峰", "武器画像/蒼鱗連峰.webp", "キャラ画像大/忌炎大.jpg"],
    ["吟霖", "星5キャラ画像/吟霖.webp", 5, "電導", "増幅器", "糸繰りの奇術", "武器画像/糸繰りの奇術.webp", "キャラ画像大/吟霖大.jpg"],
    ["今汐", "星5キャラ画像/今汐.webp", 5, "回折", "長刃", "歳華調和", "武器画像/歳華調和.webp", "キャラ画像大/今汐大.png"],
    ["長離", "星5キャラ画像/長離.webp", 5, "焦熱", "迅刀", "赫く燃ゆる流光", "武器画像/赫く燃ゆる流光.webp", "キャラ画像大/長離大.jpg"],
    ["折枝", "星5キャラ画像/折枝.webp", 5, "凝縮", "増幅器", "氷華の雅印", "武器画像/氷華の雅印.webp", "キャラ画像大/折枝大.jpg"],
    ["相里要", "相里要.webp", 5, "電導", "手甲", "万端の枢機", "武器画像/万端の枢機.webp", "キャラ画像大/相里要大.jpeg"],
    ["ショアキーパー", "星5キャラ画像/ショアキーパー.webp", 5, "回折", "増幅器", "星々のコンチェルト", "武器画像/星々のコンチェルト.webp", "キャラ画像大/ショアキーパー大.jpg"],
    ["ツバキ", "星5キャラ画像/ツバキ.webp", 5, "消滅", "迅刀", "春裁ち", "武器画像/春裁ち.webp", "キャラ画像大/ツバキ大.webp"],
    ["カルロッタ", "星5キャラ画像/カルロッタ.webp", 5, "凝縮", "拳銃", "ラストダンス", "武器画像/ラストダンス.webp", "キャラ画像大/カルロッタ大.webp"],
    ["ロココ", "星5キャラ画像/ロココ.webp", 5, "消滅", "手甲", "トラジコメーディア", "武器画像/トラジコメーディア.webp", "キャラ画像大/ロココ大.webp"],
    ["フィービー", "星5キャラ画像/フィービー.webp", 5, "回折", "増幅器", "光のハルモニア", "武器画像/光のハルモニア.webp", "キャラ画像大/フィービー大.webp"],
    ["ブラント", "星5キャラ画像/ブラント.webp", 5, "焦熱", "迅刀", "エンドレスボヤージュ", "武器画像/エンドレスボヤージュ.webp", "キャラ画像大/ブラント大.webp"],
    ["カンタレラ", "星5キャラ画像/カンタレラ.png", 5, "消滅", "増幅器", "深海の囁き", "武器画像/深海の囁き.webp", "キャラ画像大/カンタレラ大.webp"],
    ["ザンニー", "星5キャラ画像/ザンニー.webp", 5, "回折", "手甲", "焔光の裁き", "武器画像/焔光の裁き.webp", "キャラ画像大/ザンニー大.webp"],
    ["シャコンヌ", "星5キャラ画像/シャコンヌ.webp", 5, "気動", "拳銃", "森のアリア", "武器画像/森のアリア.webp", "キャラ画像大/シャコンヌ大.webp"],
    ["カルテジア", "星5キャラ画像/カルテジア.webp", 5, "気動", "迅刀", "定めを覆す荊冠", "武器画像/定めを覆す荊冠.webp", "キャラ画像大/カルテジア大.webp"],
    ["ルパ", "星5キャラ画像/ルパ.webp", 5, "焦熱", "長刃", "闘炎の爪痕", "武器画像/闘炎の爪痕.webp", "キャラ画像大/ルパ大.webp"],
    ["フローヴァ", "星5キャラ画像/フローヴァ.png", 5, "消滅", "増幅器", "幽冥の忘憂曲", "武器画像/幽冥の忘憂曲.webp", "キャラ画像大/フローヴァ大.webp"],
    ["オーガスタ", "星5キャラ画像/オーガスタ.webp", 5, "電導", "長刃", "雷霆を統べし王剣", "武器画像/雷霆を統べし王剣.webp", "キャラ画像大/オーガスタ大.webp"],
    ["ユーノ", "星5キャラ画像/ユーノ.webp", 5, "気動", "手甲", "万物を書き留める月相", "武器画像/万物を書き留める月相.webp", "キャラ画像大/ユーノ大.jpgwebp"],
    ["ガルブレーナ", "星5キャラ画像/ガルブレーナ.webp", 5, "焦熱", "拳銃", "ルクス＆アンブラ", "武器画像/ルクス＆アンブラ.webp", "キャラ画像大/ガルブレーナ大.webp"],
    ["仇遠", "星5キャラ画像/仇遠.webp", 5, "気動", "迅刀", "破敵の鋭竹", "武器画像/破敵の鋭竹.webp", "キャラ画像大/仇遠大.webp"],
    ["千咲", "千咲.webp", 5, "消滅", "長刃", "曇斬", "武器画像/曇斬.webp", "キャラ画像大/千咲大.webp"],
    ["リンネー", "星5キャラ画像/リンネー.webp", 5, "回折", "拳銃", "スペクトル・ブラスター", "武器画像/スペクトル・ブラスター.webp", "キャラ画像大/リンネー大.webp"],
    ["モーニエ", "モーニエ.webp", 5, "焦熱", "長刃", "スターキャリブレーター", "武器画像/スターキャリブレーター.webp", "キャラ画像大/モーニエ大.webp"],
    ["エイメス", "星5キャラ画像/エイメス.webp", 5, "焦熱", "迅刀", "とこしえの明星", "武器画像/とこしえの明星.webp", "キャラ画像大/エイメス大.webpwebp"],
    ["リューク・ヘルセン", "星5キャラ画像/リューク・ヘルセン.webp", 5, "回折", "手甲", "デイブレイカースパイン", "武器画像/デイブレイカースパイン.webp", "キャラ画像大/リューク・ヘルセン大.webp"],
    ["シグリカ", "星5キャラ画像/シグリカ.webp", 5, "気動", "手甲", "ソル・スウォーンの注釈", "武器画像/ソル・スウォーンの注釈.webp", "キャラ画像大/シグリカ大.webp"],
    ["緋雪", "星5キャラ画像/緋雪.png", 5, "凝縮", "迅刀", "灼霜", "武器画像/灼霜.webp", "キャラ画像大/緋雪大.webp"],
    ["ダーニャ", "星5キャラ画像/ダーニャ.webp", 5, "焦熱", "増幅器", "偽物の矮星", "武器画像/偽物の矮星.webp", "キャラ画像大/ダーニャ大.webp"],
    ["レベッカ", "星5キャラ画像/レベッカ.png", 5, "電導", "拳銃", "スカル・ポッパー", "武器画像/スカル・ポッパー.webp", "キャラ画像大/レベッカ大.webp"],
    ["ルーシー", "星5キャラ画像/ルーシー.png", 5, "回折", "拳銃", "スペクトラル・トリガー", "武器画像/スペクトラル・トリガー.webp", "キャラ画像大/ルーシー大.webp"],
    ["ルシラー", "星5キャラ画像/ルシラー.jpeg", 5, "凝縮", "増幅器", "フリーズフレーム", "武器画像/フリーズフレーム.webp", "キャラ画像大/ルシラー大.webp"],
    ["秧秧・玄翎", "星5キャラ画像/秧秧・玄翎.png", 5, "消滅", "迅刀", "天つ蒼淵", "武器画像/天つ蒼淵.webp", "キャラ画像大/秧秧・玄翎大.webp"],
    ["穂穂", "星5キャラ画像/穂穂.webp", 5, "凝縮", "増幅器", "夕霞の飲露", "武器画像/夕霞の飲露.webp", "キャラ画像大/穂穂大.webp"],
    ["清宵", "星5キャラ画像/清宵.webp", 5, "気動", "迅刀", "雲琅", "武器画像/雲琅.webp", "キャラ画像大/清宵大.webp"],
    ["景燃", "星5キャラ画像/景燃.webp", 5, "焦熱", "長刃", "幾千の導き", "武器画像/幾千の導き.webp", "キャラ画像大/景燃大.webp"],
    ["心", "心.webp", 5, "電導", "増幅器", "玉殿に咲き満ちる玄華", "武器画像/玉殿に咲き満ちる玄華.webp", "キャラ画像大/心大.webp"],
    ["鎖瞑", "鎖瞑.webp", 5, "電導", "迅刀", "沈冥", "武器画像/沈冥.webp", "キャラ画像大/鎖瞑大.webp"],
    ["リリー", "リリー.jpeg", 5, "回折", "拳銃", "不明", "武器画像/不明.webp", "キャラ画像大/リリー大.webp"],
    ["鑑心", "鑑心.webp", 5, "気動", "手甲", "", "", ""],
    ["凌陽", "凌陽.webp", 5, "凝縮", "", "", "", ""],
    ["カカロ", "カカロ.webp", 5, "電導", "", "", "", ""],
    ["ヴェリーナ", "ヴェリーナ.webp", 5, "回折", "増幅器", "", "", ""],
    ["アンコ", "アンコ.webp", 5, "焦熱", "", "", "", ""],
    
    ["淵武", "星4キャラ画像/淵武.webp", 4, "電導", "手甲", "キャラ画像大/淵武大.webp"],
    ["散華", "星4キャラ画像/散華.webp", 4, "凝縮", "迅刀", "キャラ画像大/散華大.webp"],
    ["白芷", "星4キャラ画像/白芷.webp", 4, "凝縮", "増幅器", "キャラ画像大/白芷大.webp"],
    ["釉瑚", "星4キャラ画像/釉瑚.webp", 4, "凝縮", "手甲", "キャラ画像大/釉瑚大.webp"],
    ["熾霞", "星4キャラ画像/熾霞.webp", 4, "焦熱", "拳銃", "キャラ画像大/熾霞大.webp"],
    ["モルトフィー", "星4キャラ画像/モルトフィー.webp", 4, "焦熱", "拳銃", "キャラ画像大/モルトフィー大.webp"],
    ["灯灯", "星4キャラ画像/灯灯.webp", 4, "電導", "長刃", "キャラ画像大/灯灯大.webp"],
    ["アールト", "星4キャラ画像/アールト.png", 4, "気動", "拳銃", "キャラ画像大/アールト大.webp"],
    ["卜霊", "星4キャラ画像/卜霊.webp", 4, "電導", "増幅器", "キャラ画像大/卜霊大.webp"],
    ["秧秧", "星4キャラ画像/秧秧.webp", 4, "気動", "迅刀", "キャラ画像大/秧秧大.webp"],
    ["桃祈", "星4キャラ画像/桃祈.webp", 4, "消滅", "長刃", "キャラ画像大/桃祈大.webp"],
    ["丹瑾", "星4キャラ画像/丹瑾.webp", 4, "消滅", "迅刀", "キャラ画像大/丹瑾大.webp"]
];

const gallery = document.getElementById("gallery");
const pageTitle = document.getElementById("page-title");
const sideMenu = document.getElementById("side-menu");
const menuButton = document.getElementById("menu-button");
const menuOverlay = document.getElementById("menu-overlay");
const regionMenu = document.getElementById("region-menu");

// 恒常★5キャラクター
const standardFiveStarNames = ["鑑心", "凌陽", "カカロ", "ヴェリーナ", "アンコ"];

// ★5キャラクターを限定と恒常に分ける
const fiveStar = characters.filter(c => c[2] === 5);
const limitedFiveStar = fiveStar.filter(
    c => !standardFiveStarNames.includes(c[0])
);
const standardFiveStar = fiveStar.filter(
    c => standardFiveStarNames.includes(c[0])
);

const fourStar = characters.filter(c => c[2] === 4);

// 所属地域。必要に応じてキャラクターを追加してね。
// ここに記載されていないキャラクターは「その他」になるよ。
const characterRegions = {
    "瑝瓏": {
        "名庭": ["鎖瞑"],
        "今州": ["忌炎", "吟霖", "今汐", "長離", "折枝", "相里要", "凌陽", "鑑心", "散華", "桃祈"],
        "夢州": ["秧秧・玄翎", "清宵", "景燃", "心"],
        "詔州": [],
        "越州": ["灯灯"],
        "重州": ["仇遠", "釉瑚"],
        "方州": [],
        "戎州": []
    },

    "ブラックショア": ["ショアキーパー", "ツバキ"],

    "リナシータ": {
        "ラグーナ": [
            "カルロッタ", "ロココ", "フィービー",
            "ブラント", "カンタレラ", "ザンニー", "シャコンヌ"
        ],
        "セブン・ヒルズ": ["オーガスタ", "ユーノ", "ルパ"]
    },

    "葦ノ原": {
        "穂波": ["千咲", "緋雪"]
    },

    "ラハイロイ": {
        "ロイ一族": ["シグリカ"],
        "スタートーチ学園": ["エイメス", "ダーニャ"]
    },

    "ネオユニオン": [],
    "残星組織": ["フローヴァ"],

    "コラボ": {
        "サイバーパンク": ["ルーシー", "レベッカ"]
    },

    "その他（不明）": ["スカー", "謎の女性"],
    "未実装": ["リリー"]
};

function getRegion(name) {
    for (const [region, names] of Object.entries(characterRegions)) {
        if (names.includes(name)) return region;
    }
    return "その他";
}

// メニューを開閉
function setMenuOpen(open) {
    sideMenu.classList.toggle("open", open);
    menuOverlay.classList.toggle("show", open);
    menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => {
    setMenuOpen(!sideMenu.classList.contains("open"));
});

menuOverlay.addEventListener("click", () => setMenuOpen(false));

// キャラクターカードを作成
function createCharacterCard(character) {
    const name = character[0];
    const image = character[1];
    const rarity = character[2];
    const attribute = character[3];
    const weapon = character[4];

    // ★4は大きな画像のパスが配列の5番目に入っている形式に対応
    const mochiWeapon = rarity === 5 ? character[5] : "";
    const mochiWeaponImage = rarity === 5 ? character[6] : "";
    const largeImage = rarity === 5 ? character[7] : character[5];

    const card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", () => showDetail(card));

    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.alt = name;
    card.appendChild(thumbnail);

    const nameElement = document.createElement("div");
    nameElement.className = "name";
    nameElement.textContent = name;
    nameElement.addEventListener("click", event => {
        showCharacterImage(event, largeImage);
    });
    card.appendChild(nameElement);

    const detail = document.createElement("div");
    detail.className = "detail-tab";

    const heading = document.createElement("h3");
    heading.textContent = name;
    detail.appendChild(heading);

    const rarityText = document.createElement("p");
    rarityText.textContent = "レア度：" + "★".repeat(rarity);
    detail.appendChild(rarityText);

    const attributeText = document.createElement("p");
    attributeText.textContent = "属性：" + attribute;
    detail.appendChild(attributeText);

    const weaponText = document.createElement("p");
    weaponText.textContent = "武器：" + weapon;
    detail.appendChild(weaponText);

    if (rarity === 5) {
        const weaponLabel = document.createElement("p");
        weaponLabel.append("餅武器：");

        const weaponName = document.createElement("span");
        weaponName.className = "weapon-name";
        weaponName.textContent = mochiWeapon;
        weaponName.addEventListener("click", event => {
            showWeapon(event, weaponName, mochiWeaponImage);
        });

        weaponLabel.appendChild(weaponName);
        detail.appendChild(weaponLabel);

        const weaponImage = document.createElement("div");
        weaponImage.className = "weapon-image";
        detail.appendChild(weaponImage);
    }

    card.appendChild(detail);
    return card;
}

// キャラクター一覧を表示
function renderCharacters(list) {
    gallery.replaceChildren();

    if (list.length === 0) {
        const message = document.createElement("p");
        message.className = "page-description";
        message.textContent = "このページに表示するキャラクターはいません。";
        gallery.appendChild(message);
        return;
    }

    list.forEach(character => {
        gallery.appendChild(createCharacterCard(character));
    });
}

// 地域メニューを自動作成
function addMenuButton(label, callback, parent) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-link";
    button.textContent = label;
    button.addEventListener("click", callback);
    parent.appendChild(button);
}

function buildRegionMenu(data, parent, path = []) {
    Object.entries(data).forEach(([label, value]) => {
        const currentPath = [...path, label];

        if (Array.isArray(value)) {
            addMenuButton(label, () => {
                showPage("category", currentPath);
            }, parent);
        } else {
            const group = document.createElement("div");

            const button = document.createElement("button");
            button.type = "button";
            button.className = "nav-link";
            button.textContent = "▸ " + label;

            const submenu = document.createElement("div");
            submenu.style.display = "none";
            submenu.style.paddingLeft = "12px";

            button.addEventListener("click", () => {
                const isOpen = submenu.style.display === "none";
                submenu.style.display = isOpen ? "block" : "none";
                button.textContent = (isOpen ? "▾ " : "▸ ") + label;
            });

            group.appendChild(button);
            group.appendChild(submenu);
            parent.appendChild(group);

            buildRegionMenu(value, submenu, currentPath);
        }
    });
}

buildRegionMenu(characterRegions, regionMenu);

// ページ切り替え
function showPage(page, region = "") {
    setMenuOpen(false);
    gallery.replaceChildren();

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.remove("active");
    });

    const activeButton = [...document.querySelectorAll(".nav-link")]
        .find(button =>
            button.dataset.page === page ||
            (!button.dataset.page && button.textContent === region)
        );

    if (activeButton) activeButton.classList.add("active");
        
    if (page === "home") {
        pageTitle.textContent = "キャラクター一覧";
    
        const description = document.createElement("p");
        description.className = "page-description";
        description.textContent =
            "≡ メニューからレア度や所属地域を選んでね。";
        gallery.appendChild(description);
    
        // ★5の見出し
        const fiveHeading = document.createElement("h2");
        fiveHeading.className = "section-title";
        fiveHeading.textContent = "★5 キャラクター";
        fiveHeading.addEventListener("click", event => {
            showGachaImage(event, "★5 キャラクター");
        });
        gallery.appendChild(fiveHeading);

        // 限定★5専用エリア
    const fiveGrid = document.createElement("div");
    fiveGrid.className = "character-grid";
    
    limitedFiveStar.forEach(c => {
        fiveGrid.appendChild(createCharacterCard(c));
    });
    
    gallery.appendChild(fiveGrid);
    
    // 恒常★5専用エリア（限定★5の下の段）
    const standardGrid = document.createElement("div");
    standardGrid.className = "character-grid";
    
    standardFiveStar.forEach(c => {
        standardGrid.appendChild(createCharacterCard(c));
    });
    
    gallery.appendChild(standardGrid);  
    
        // ★4の見出し
        const fourHeading = document.createElement("h2");
        fourHeading.className = "section-title";
        fourHeading.textContent = "★4 キャラクター";
        gallery.appendChild(fourHeading);
    
        // ★4専用エリア
        const fourGrid = document.createElement("div");
        fourGrid.className = "character-grid";
    
        fourStar.forEach(c => {
            fourGrid.appendChild(createCharacterCard(c));
        });
    
        gallery.appendChild(fourGrid);
    
        return;
    }

    if (page === "star5") {
        pageTitle.textContent = "★5 キャラクター";
        renderCharacters(fiveStar);
        return;
    }

    if (page === "star4") {
        pageTitle.textContent = "★4 キャラクター";
        renderCharacters(fourStar);
        return;
    }
        

}

// レア度ページのメニューを設定
document.querySelectorAll(".nav-link[data-page]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.page);
    });
});

// 初期ページ
showPage("home");

// カード詳細を開閉
function showDetail(card) {
    const detail = card.querySelector(".detail-tab");
    detail.classList.toggle("show");
}

// 餅武器画像を開閉
function showWeapon(event, weaponName, image) {
    event.stopPropagation();

    const weaponImage = weaponName
        .closest(".detail-tab")
        .querySelector(".weapon-image");

    if (weaponImage.innerHTML !== "") {
        weaponImage.innerHTML = "";
    } else {
        const img = document.createElement("img");
        img.src = image;
        img.alt = "武器";
        weaponImage.appendChild(img);
    }
}

// 大きなキャラ画像
function showCharacterImage(event, image) {
    event.stopPropagation();

    const modal = document.getElementById("imageModal");
    const largeImage = document.getElementById("largeCharacterImage");

    largeImage.src = image;
    modal.classList.add("show");
}

function closeCharacterImage() {
    const modal = document.getElementById("imageModal");
    const largeImage = document.getElementById("largeCharacterImage");

    modal.classList.remove("show");
    largeImage.src = "";
}

// ★5ガチャ演出
function showGachaImage(event, title) {
    if (title !== "★5 キャラクター") return;

    event.stopPropagation();
    document.getElementById("gachaModal").classList.add("show");
}

function closeGachaImage() {
    document.getElementById("gachaModal").classList.remove("show");
}

/*
const SITE_PASSWORDS = [
    "705131225",
    "885322062",
];

document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("password-input");
    const error = document.getElementById("password-error");

    if (SITE_PASSWORDS.includes(input.value.trim())) {
        document.getElementById("password-screen").style.display = "none";
    } else {
        error.textContent = "パスワードが違います。";
        input.value = "";
        input.focus();
    }
});
*/
