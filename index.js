const btn = document.querySelector("button");
btn.addEventListener("click", draw);

function draw() {
    // 乱数
    const rand = Math.floor(Math.random() * 100);
    
    // おみくじ結果を出力するフィールド
    const result = document.getElementById("result");

    // 条件分岐　1～5:大吉　6～25:中吉　26～60:吉　61～99:凶
    switch(true) {
        case rand <= 5:
            result.textContent = "結果：大吉";
            break;

        case rand > 5 && rand <=25:
            result.textContent = "結果：中吉";
            break;

        case rand > 25 && rand <= 60:
            result.textContent = "結果：吉";
            break;

        case rand > 60:
            result.textContent = "結果：凶";
            break;        
    }

}