let turnO = true;
let $btnbox = $(".btn-box");
let $reset = $(".reset");
let $msg = $(".msg");

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

$btnbox.on("click",function () { 
    if ($(this).html()=== "") {
        if (turnO) {
            $(this).html("O");
            turnO = false;
            $msg.html("X player's turn.")
        }
        else
        {
            $(this).html("X");
            turnO = true;
            $msg.html("O player's turn.")
        }
        checkWinner();
    }
});

$reset.on("click",function () {
    $btnbox.each(function () { 
        $(this).html("");
        $(this).prop("disabled",false);
    });
    $msg.html("O player's turn.");
    turnO=true;
});



const checkWinner = () =>{
    for (let i = 0; i < winPatterns.length; i++) {
        const [a,b,c] = winPatterns[i];
        const A = $btnbox.eq(a).html();
        const B = $btnbox.eq(b).html();
        const C = $btnbox.eq(c).html();
        if (A != "" && B != "" && C != "") {
            if (A === B && B === C) {
                $msg.html(`Winner is  ${A}`);
                diableBox();
                return;
            }
        }
    }
    if ($btnbox.toArray().every(box => $(box).text() !== "")) {
        $msg.html("It's a Draw!!!");
    }
}


const disableBox = () => {
    $btnbox.prop("disabled",true);
}