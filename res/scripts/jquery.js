var whiteSpace = 0;

levels = localStorage.getItem("levels");
total = parseInt(levelTotal);

typedAns = '';
typedAnsNumbers = [];

var coins = localStorage.getItem("coins");
$('#coins').text(coins);

function AnsPlus() {
	ans++; return
}
var FullImage = 0;

function Levelfunct() {
	levels++;
	localStorage.setItem("levels", levels);
}

$('.next').click(function () {
	if (levels <= total) {
		$(".show-hint").css({ visibility: 'visible' });
		typedAns = '';
		typedAnsNumbers = [];
		$(".letters-bg").empty();
		$(".answer-bg").empty();
		ans = 0;
		digit = 1;
		totaldigit = 1;
		setTimeout(() => {
			Intro();
			AppenAll();
		}, 600);
	} else { window.history.back(); }
});


var ans = 0;
var digit = 1;
var totaldigit = 1;


function Intro() {
	setTimeout(() => { $(".answer-bg, .main-img-bg, .back-img").css({ transform: 'scale(1)', opacity: '1' }); }, 100);
	setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 200);
	setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 300);
	$(".finish-con").fadeOut();
	setTimeout(() => {
		$(".game-over").css({ transform: 'scale(1)', opacity: '1' });
		$('.levels, .coins').css({ transform: 'scale(1)', opacity: '1' });
	}, 600);
}
Intro();

function Outro() {
	setTimeout(() => {
		$(".game-over-con").fadeOut();
		$(".game-over").css({ transform: 'scale(1.2)', opacity: '0' });
		$('.levels, .coins').css({ transform: 'scale(1.2)', opacity: '0' });
	}, 100);
	setTimeout(() => { $(".answer-bg, .main-img-bg, .back-img").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
	setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1.2)', opacity: '0' }); }, 150);
	setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1.2)', opacity: '0' }); }, 200);
}

if (FullImage == 0) {
	$(".main-img-bg2").css({ visibility: 'hidden' });
}
function Retryminus() {
	if (coins >= 1) {
		coins--;
		localStorage.setItem("coins", coins);
		document.getElementById("coins").innerHTML = coins;
	}
}

function MainShuffle() {
	$(function () {
		var parent = $(".letters-bg");
		var divs = parent.children();
		while (divs.length) {
			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}
	});
}
MainShuffle();

function LevelNext() {
	coins++;
	localStorage.aCoins = coins;
	$("#coins").text(coins);
}
$("#coin-txt").text('+1');

$(".main-img").on("load", function () {
	$(".loading-txt").fadeOut();
	$(".main-img").fadeIn();
});

$(document).ready(function () {

	Inter = localStorage.getItem('Inter');
	isAdRemoved = parseInt(localStorage.mal_isAdRemoved)

	$('.back-img, .home, .retry, .next').click(function () {
		if (isAdRemoved == 1) {
			// Inter is Removed
			return
		}
		if (Inter > 4) {
			Inter = 0;
			localStorage.setItem('Inter', 0);
			parent.location = 'https://inter';
		} else {
			Inter++;
			localStorage.setItem('Inter', Inter);
		}
	});

	$('.retry').click(function () {
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.game-over-con').fadeOut();
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});


	$('.skip').click(function () {
		if (coins < 10) {
			document.getElementById("button3").play();
			$('.out-coins-con').css({ display: 'flex' });
		} else {
			typedAns = '';
			typedAnsNumbers = [];
			hint = 0; localStorage.setItem("malMovieHint", hint);
			document.getElementById("win").play();
			coins-=10;
			localStorage.setItem("coins", coins);
			$("#coins").html(coins);
			$('.finish-con').css({ display: 'flex' });
			$('.score2').fadeOut(0);
			Levelfunct();
		}
	});


	$('.back-img, .home').click(function () {
		Outro();
		setTimeout(function () { window.history.back(); }, 900);
	});

	$('.next').click(function () {
		Outro();
	});

	$('.btn1, .btn3').click(function () {
		setTimeout(() => { $(".out-coins").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.out-coins-con').fadeOut();
		setTimeout(() => { $(".out-coins").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});

	$('.btn1').click(function () {
		setInterval(() => {
			coins = localStorage.getItem("coins");
			$("#coins").html(coins);
		}, 2000);
		$(".buy-coins-con").fadeIn();
	});

	$('.buy-coins-top').click(function () {
		$(".buy-coins-con").fadeOut();
	});

	$(".free").click(function () {
		setTimeout(() => { parent.location = "https://reward"; }, 350);
	});
	$(".buy1").click(function () {
		setTimeout(() => { parent.location = "https://item1"; }, 350);
	});
	$(".buy2").click(function () {
		setTimeout(() => { parent.location = "https://item2"; }, 350);
	});
	$(".buy3").click(function () {
		setTimeout(() => { parent.location = "https://item3"; }, 350);
	});

	$('.cancel').click(function () {
		$('.no-more-vid-con').fadeOut();
	});

	$('.btn1, .btn3, .home, .retry, .back-img, .cancel, .clear-all').click(function () {
		document.getElementById("button2").play();
	});

	//answers
});

function SqAdAppend() {
	adVar = Math.floor(Math.random() * 5 + 1);
	setTimeout(() => {
		$(".completed-img").attr("src", "../res/image/ad/sq" + adVar + ".png");
	}, 600);

	if (adVar == 1)
		link = "https://play.google.com/store/apps/details?id=com.logiclore.guess.bollywood";
	if (adVar == 2)
		link = "https://play.google.com/store/apps/details?id=com.logiclore.kodeeshwaran";
	if (adVar == 3)
		link = "https://play.google.com/store/apps/details?id=com.logiclore.guess.tamil";
	if (adVar == 4)
		link = "https://play.google.com/store/apps/details?id=com.logiclore.anime.guess";
	if (adVar == 5)
		link = "https://play.google.com/store/apps/details?id=com.logiclore.queball";
}
$(".box-ad").click(function() {
	parent.location=link;
});

function AppenAll() {
	fullAns = window['q' + levels];
	full2Ans = fullAns.replace(/ /g, "").toUpperCase();
	whiteSpace = 0;
	$("#ans-txt").html(fullAns);
	$("#main-levels").text(' ' + levels);

	$(".main-img").fadeOut();
	$(".loading-txt").fadeIn();

	$(".main-img").attr('src', 'images/' + levels + '.webp');

	for (let aa = 1; aa <= full2Ans.length; aa++) {
		$('.main-answer-bg').append(`
	<div class="answer-ct ans-ct answer-ct${aa}" id="ans-ct${aa}"><div class="ans" id="ans${aa}"></div></div>
	`);
	}

	for (let ac = 1; ac <= full2Ans.length; ac++) {
		$('.letters-bg').append(`
	<div class="letter-ct" id="ct${ac}"></div>
	`);

		if (ac == full2Ans.length) {
			readyFunction();
		}
	}

	splittedAns = fullAns.split(' ');
	whiteSpace = splittedAns.length - 1;
	older = NaN;
	breakNum = [];
	for (i in fullAns) {
		if (fullAns[i] == ' ') {
			breakNum.push(parseInt(i)+1);
		}
	}

	count=0;
	singleLine=0;
	for (ws in splittedAns) {
		ws = parseInt(ws);
		count+=splittedAns[ws].length;
		singleLine+=splittedAns[ws].length;
		if (splittedAns[ws].length < 9 && singleLine < 10) {
			if (parseInt(ws) == (splittedAns.length - 1)) {
				singleLine++;
				$("<div class='empty-ct'></div>").insertAfter(".answer-ct" + count);
			} else if (splittedAns[(ws+1)].length < (11 - singleLine)) {
				singleLine++;
				$("<div class='empty-ct'></div>").insertAfter(".answer-ct" + count);
			} else {
				singleLine=0;
				$("<break></break>").insertAfter(".answer-ct" + count);
			}
		} else {
			singleLine=0;
			$("<break></break>").insertAfter(".answer-ct" + count);
		}

	}
	ansLength = fullAns.length - whiteSpace;

	for (let a = 0; a < full2Ans.length; a++) {
		window["ct" + (a + 1)] = full2Ans.charAt(a);
		window["hintct" + (a + 1)] = full2Ans.charAt(a);
		$("#ct" + (a + 1)).html(full2Ans[a]);

		if (a == (full2Ans.length - 1)) {
			letterClick();
		}
	}

	if (localStorage.getItem("malMovieHint") == null) {
		hint = 0; localStorage.setItem("malMovieHint", hint);
	} else {
		hint = parseInt(localStorage.getItem("malMovieHint"));
	}

	
	function AppendHint() {
		if (hint > 0) {
			for (let hi = 0; hi <= hint; hi++) {
				$("#ans" + hi).html(full2Ans.charAt(hi - 1));
				$("#ans-ct"+hi).css({backgroundColor:'green', color:'white'});
			}
			for (i=0; i < hint; i++) {
				typedAns += full2Ans[i];
				console.log(hint);
				typedAnsNumbers.push(i+1);
				$("#ct"+(i+1)).css({visibility:'hidden'});
			}
		}
	}
	AppendHint();

	digit = hint+1;
	totaldigit = hint+1;

	if (hint == full2Ans.length - 1) {
		$(".show-hint").css({ visibility: 'hidden' });
	}

	MainShuffle();

	vhHeight = $(window).outerHeight();
	fullHeight = $(".full").outerHeight();
	calcHeight = vhHeight - fullHeight;
	$(".letters-bg").css({ height: '' + (calcHeight - 10) });

	SqAdAppend();
}
AppenAll();

$('.clear-all').click(function () {
	fullAns = window['q' + levels];
	full2Ans = fullAns.replace(/ /g, "").toUpperCase();

	hint = parseInt(hint);
	$(".ans").empty();
	ans = 0;
	digit = hint+1;
	totaldigit = hint+1;
	typedAns = '';
	typedAnsNumbers = [];

	$('.letter-ct').css({
		'visibility': 'visible'
	});
	//Appending hint
	if (hint > 0) {
			for (let hi = 0; hi <= hint; hi++) {
				$("#ans" + hi).html(full2Ans.charAt(hi - 1));
				$("#ans-ct"+hi).css({backgroundColor:'green', color:'white'});
			}
			for (i=0; i < hint; i++) {
				typedAns += full2Ans[i];
				console.log(hint);
				typedAnsNumbers.push(i+1);
				$("#ct"+(i+1)).css({visibility:'hidden'});
			}
		}
});

function readyFunction() {

	$(".main-img").error(function () {
		$(".img-error").css({ display: "flex" });
		$(".main-img").css({ visibility: 'hidden' });
	});

	$(".back-img, .coins-img, .clear-all, .hint, .button").error(function () {
		$("img").fadeOut(0);
		$(".full-error").css({ display: 'flex' });
	});

	$(".img-error-btn").click(function () {
		$(".img-error").fadeOut(0);
		$(".main-img").attr("src", "../images/" + levels + ".webp");
		$(".main-img").css({ visibility: 'visible' });
	});
	$(".img-error-btn2").click(function () {
		setTimeout(() => { location.reload(); }, 200);
	});

} //readyFunction closed

function replaceAt(str, index, chr) {
	tmpList = [];
	for (i = 0; i < str.length; i++) {
		tmpList.push(str[i]);
	}
	tmpList[index] = chr;
	return tmpList.join().replace(new RegExp(",", "g"), '');
}


function letterClick() {

	$(".letter-ct").click(function () {
		fullAns = window['q' + levels];
		full2Ans = fullAns.replace(/ /g, "").toUpperCase();

		document.getElementById("button").play();
		console.log('totaldigit',totaldigit)
		console.log('full2Ans.length',full2Ans.length)
		if ((totaldigit-1) >= full2Ans.length) {
			return
		}

		$(this).css({ visibility: 'hidden' });
		previousLetterIndex = null;

		for (i = 0; i < typedAns.length; i++) {
			if (typedAns[i] == '$') {
				previousLetterIndex = i;
				break;
			}
		}

		selectedAns = $(this).text();
		console.log('selectedAns', selectedAns)

		if (previousLetterIndex != null) {
			//previous letter ct should be applied
			$("#ans" + (previousLetterIndex + 1)).html(selectedAns);
			typedAnsNumbers[previousLetterIndex] = parseInt($(this).attr('id').replace('ct', ''));
			typedAns = replaceAt(typedAns, previousLetterIndex, selectedAns);
		} else {
			// new letter ct should be applied 
			$("#ans" + digit).html(selectedAns);
			digit++;
			typedAnsNumbers.push(parseInt($(this).attr('id').replace('ct', '')));
			typedAns += selectedAns;
		}
		totaldigit++;
		console.log('typedAns', typedAns)


		var fullAns = window['q' + levels];
		var full2Ans = fullAns.replace(/ /g, "").toUpperCase();

		if (digit == (full2Ans.length + 1)) {
			finalCheck();
		}
		$('#ans').text(ans);
		$('#digit').text(digit);
		$('#totaldigit').text(totaldigit);
	});

	$(".ans-ct").click(function () {
		ctVar = parseInt($(this).attr('id').replace("ans-ct", ""));
		if (ctVar < digit && !$('#ans' + ctVar).is(':empty') && ctVar > hint) {
			//proceed to remove letter
			totaldigit--;
			$("#ans" + ctVar).empty();
			$("#ct" + typedAnsNumbers[ctVar - 1]).css({ visibility: 'visible' });
			typedAnsNumbers[ctVar - 1] = 0;
			typedAns = replaceAt(typedAns, (ctVar - 1), '$');
		}
		$('#ans').text(ans);
		$('#digit').text(digit);
		$('#totaldigit').text(totaldigit);
	});

}

function finalCheck() {
	var fullAns = window['q' + levels];
	var full2Ans = fullAns.replace(/ /g, "").toUpperCase();

	setTimeout(() => {
		if (totaldigit == full2Ans.length + 1) {
			if (typedAns == full2Ans) {
				hint = 0; localStorage.setItem("malMovieHint", hint);
				Levelfunct();
				$('.score2').css({ visibility:'visible' });
				$('.finish-con').css({ display: 'flex' });
				document.getElementById("finish").play();
				coins++;
			} else {
				$('.game-over-con').css({ display: 'flex' });
				document.getElementById("over").play();
				if (coins > 0) {coins--;}
			}
			localStorage.aCoins = coins;
			$("#coins").html(coins);
		}
	}, 200);
}

if (localStorage.Inter == 'NaN' || localStorage.Inter == NaN) {localStorage.Inter = 1;}

$('.show-hint').click(function () {
	fullAns = window['q' + levels];
	full2Ans = fullAns.replace(/ /g, "").toUpperCase();

	if (coins < 1) {
		document.getElementById("button3").play();
		$('.out-coins-con').css({ display: 'flex' });
	} else {
		document.getElementById("hint").play();
		hint++; localStorage.setItem("malMovieHint", hint);
		$("#ans-ct" + hint).css({backgroundColor:'green', color:'white'});
		$("#ct"+hint).css({visibility:'hidden'});
		//check if showing hint is empty
		if ($('#ans' + hint).is(':empty')) {
			//its empty
			previousLetterIndex = null;
			for (i = 0; i < typedAns.length; i++) {
				if (typedAns[i] == '$') {
					previousLetterIndex = i;
					break;
				}
			}
			if (previousLetterIndex != null) {
				typedAns = replaceAt(typedAns, previousLetterIndex, full2Ans[hint-1]);
			} else {
				typedAns+=full2Ans[hint-1];
				digit++;
			}
			typedAnsNumbers.push(hint);
			totaldigit++;
		} else {
			if (typedAnsNumbers[hint-1] != hint) {
				//typed ans & hint ans are NOT same
				$('#ct'+typedAnsNumbers[hint-1]).css({visibility:'visible'});
			}
			typedAns = replaceAt(typedAns, hint-1, full2Ans[hint-1]);
			typedAnsNumbers[hint-1] = hint;
		}
		$("#ans" + hint).html(window["ct" + hint]);
		// typedAns = replaceAt(typedAns, (hint-1), full2Ans[hint-1]);
		console.log('typedAns',typedAns)
		coins--; localStorage.setItem("coins", coins);
		$("#coins").html(coins);

		if (hint == full2Ans.length - 2) {
			$(".show-hint").css({ visibility: 'hidden' });
		}
	}
});

smallImage = true;
$(".main-img").click(function () {
	if (smallImage) {
		smallImage = false;
		$('.main-img').css({ maxWidth: '100vw', maxHeight: '50vh' });
	} else {
		smallImage = true;
		$(".main-img").css({ maxWidth: '85vw', maxHeight: '30vh' });
	}
});