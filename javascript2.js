let nowTotal = 0; //現在の合計値
let nowInput = ""; //現在の入力値
let operator = "+"; //合計と入力値の演算子
let judgment = 1; //直前に入力したものの判定 0:数字 1:演算子
let calculate = ""; //計算式の作成

function input_number(number){
	judgment = 0;
	nowInput += number;
	document.calculate.result.value = nowInput;
}

function input_operator(symbol){
	if(judgment === 0){
		judgment = 1;
		calculate = nowTotal + operator + nowInput;
		nowTotal = eval(calculate);
		nowInput = "";
		document.calculate.result.value = nowTotal;
	}
	if(symbol === "="){
		operator = "+";
	}else{
		operator = symbol;
	}
}

function input_clear(){
	nowTotal = 0;
	nowInput = "";
	operator = "+";
	judgment = 1;
	calculate = "";
	document.calculate.result.value = 0;
}
    
