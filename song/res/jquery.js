levels = localStorage.songLevel
total = parseInt(songLevelTotal);

var coins = localStorage.getItem("coins");
document.getElementById("coins").innerHTML = coins;

setTimeout(() => { $(".answer-bg, .back-img").css({ transform: 'scale(1)', opacity: '1' }); }, 100);
setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 200);
setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 300);

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

function MainShuffle() {
	$(function () {
		var parent = $(".letters-bg");
		var divs = parent.children();
		while (divs.length) {
			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}
	});
}

function LevelNext() {
	coins++;
	localStorage.setItem("coins", coins);
	document.getElementById("coins").innerHTML = coins;
}
document.getElementById("coin-txt").innerHTML = "+1";

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

$(document).ready(function () {
	vhHeight = $(window).outerHeight();
	fullHeight = $(".full").outerHeight();
	calcHeight = vhHeight - fullHeight;
	$(".letters-bg").css({ height: '' + (calcHeight - 10) });

	function Append() {
		$('.play-aud').css({ visibility: 'hidden' });
		$('.playing-bg').fadeOut();
		$('.loading-bg').css({ display: 'flex' });

		interact = true;
		$("#main-levels").text(levels);
		$("#ans").text(window[`q${levels}`]);
		$("#noans1").text(window[`q1${levels}`]);
		$("#noans2").text(window[`q2${levels}`]);
		$("#noans3").text(window[`q3${levels}`]);
		$("#noans4").text(window[`q4${levels}`]);
		$(".main-img").attr('src', `audio/${levels}.mp3`);
		setTimeout(() => {
			$("#ans-txt").html(window[`ans${levels}`]);
		}, 400);

		$(".option").css({
			background: '#181d3d'
		});

		MainShuffle();

		document.getElementById("main-aud").play();

		if (window['li' + levels] == null) {
			$('.yt-bg').fadeOut(0);
		} else {
			$('.yt-bg').off();
			$('.yt-bg').click(function () {
				console.log("yt-bg")
				setTimeout(() => {
					console.log('levels', levels)
					console.log('parent.location', window['li' + (levels - 1)])
					window.location = window['li' + (levels - 1)];
				}, 600);
			});
		}
		SqAdAppend();
	}
	Append();

	window.onload = function () {
		audio = document.getElementById("main-aud");
	};

	firstRun = true;
	$(".sound-img").click(function () {
		var files = this.files;
		// audio.src = URL.createObjectURL(files[0]);
		audio.load();
		audio.play();
		var context = new AudioContext();


		if (firstRun) {
			firstRun = false;
			src = context.createMediaElementSource(audio);
			analyser = context.createAnalyser();
			src.connect(analyser);
			analyser.connect(context.destination);
		}

		var canvas = document.getElementById("canvas");
		// canvas.width = window.innerWidth;
		// canvas.height = window.innerHeight;
		var ctx = canvas.getContext("2d");



		analyser.fftSize = 256;

		var bufferLength = analyser.frequencyBinCount;
		console.log(bufferLength);

		var dataArray = new Uint8Array(bufferLength);

		var WIDTH = canvas.width;
		var HEIGHT = canvas.height;

		var barWidth = (WIDTH / bufferLength) * 2.5;
		var barHeight;
		var x = 0;

		function renderFrame() {
			requestAnimationFrame(renderFrame);

			x = 0;

			analyser.getByteFrequencyData(dataArray);

			ctx.fillStyle = "#ffffffe0";
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			for (var i = 0; i < bufferLength; i++) {
				barHeight = dataArray[i];

				var r = barHeight + (25 * (i / bufferLength));
				var g = 250 * (i / bufferLength);
				var b = 50;

				ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
				ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

				x += barWidth + 1;
			}
		}

		audio.play();
		renderFrame();
	});

	$("#main-aud").on("ended", function () {
		//song play ended
		$('.playing-bg').fadeOut();
		$('.play-aud').css({ visibility: 'visible' });
	});

	document.getElementById("main-aud").onplaying = function () {
		//starts playing the song
		setTimeout(() => {
			$('.play-aud').css({ visibility: 'hidden' });
			$('.playing-bg').css({ display: 'flex' });
		}, 400);

	};

	$('.next').click(function () {
		//the 'levels' variable have new unlocked level value while 'next' button is clicked
		if (levels <= total) {
			Append();
		} else { window.history.back(); }
		setTimeout(() => {
			$(".finish-con").fadeOut();
			$(".game-over").css({ transform: 'scale(1.2)', opacity: '0' });
			$('.levels, .coins').css({ transform: 'scale(1.2)', opacity: '0' });
		}, 100);
		setTimeout(() => {
			$('.score2').css({ visibility: 'hidden' });
			$(".finish-con").fadeOut();
			$(".game-over").css({ transform: 'scale(1)', opacity: '1' });
			$('.levels, .coins').css({ transform: 'scale(1)', opacity: '1' });
		}, 500);
	});

	var Inter = localStorage.getItem('Inter');
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
		interact = true;
		$(".option").css({
			background: '#181d3d'
		});
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.game-over-con').fadeOut();
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});

	$('.skip-img').click(function () {
		if (coins < 10) {
			document.getElementById("button3").play();
			$('.out-coins-con').css({ display: 'flex' });
			setTimeout(function () { $('.hint-bg-bg').fadeOut(); }, 100);
			setTimeout(function () { $('.hint-bg').css({ top: '0' }); }, 400);
		} else {

			document.getElementById("win").play();
			coins -= 10;
			levels++; localStorage.songLevel = levels;
			localStorage.coins = coins;
			$("#coins").html(coins);
			$('.finish-con').css({ display: 'flex' });
		}
	});


	$('.back-img, .home').click(function () {
		Outro();
		setTimeout(function () { window.history.back(); }, 900);
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

	$('.hint').click(function () {
		$(".hint-bg-bg").css({ display: 'block' });
	});

	$('.hint-bg-close, .hint-bg-top').click(function () {
		$(".hint-bg-bg").fadeOut();
		$('.hint-bg').css({ transform: 'translateY(20%)', opacity: '0' });
		setTimeout(() => { $('.hint-bg').css({ transform: 'translateY(0%)', opacity: '1' }); }, 400);
	});

	$('.letter-ct').click(function () {
		document.getElementById("button").play();
	});
	$('.btn1, .btn3, .home, .retry, .back-img, .hint, .cancel, .clear-all').click(function () {
		document.getElementById("button2").play();
	});

	interact = true;
	$("#ans").click(function () {
		document.getElementById("main-aud").pause();
		if (!interact)
			return

		interact = false;
		console.log("Correct");
		$(this).css({ background: 'green' });
		document.getElementById("finish").play();

		giveReward = Math.floor((Math.random() * 3) + 1);

		setTimeout(() => {
			if (giveReward == 1) {
				//give one coin
				$('.score2').css({ visibility: 'visible' });
				coins++; localStorage.setItem("coins", coins);
				$("#coins").html(coins);
			}
			$('.finish-con').css({ display: 'flex' });
		}, 400);
		levels++;
		localStorage.songLevel = levels;
	});
	$(".noans").click(function () {
		if (!interact)
			return

		interact = false;
		console.log("Wrong");
		$(this).css({ background: 'red' });
		document.getElementById("over").play();
		setTimeout(() => {
			$('.game-over-con').css({ display: 'flex' });
			if (coins >= 4) {
				coins -= 4; localStorage.coins = coins;
				$("#coins").html(coins);
			} else if (coins > 0) {
				coins = 0; localStorage.coins = coins;
				$("#coins").html(coins);
			}
		}, 400);
	});

	$(".main-img").error(function () {
		$(".img-error").css({ display: "flex" });
		$(".main-img").css({ visibility: 'hidden' });
		$('.play-aud').css({ visibility: 'hidden' });
	});

	$(".back-img, .coins-img, .clear-all, .hint, .button").error(function () {
		$("img").fadeOut(0);
		$(".full-error").css({ display: 'flex' });
	});

	$(".img-error-btn").click(function () {
		$(".img-error").fadeOut(0);
		$('.play-aud').css({ visibility: 'visible' });
		$(".main-img").attr("src", "audio/" + levels + ".mp3");
		$(".main-img").css({ visibility: 'visible' });
	});
	$(".img-error-btn2").click(function () {
		setTimeout(() => { location.reload(); }, 200);
	});

});

$(".disclaimer-txt").click(function () {
	$('.front').css({ transform: 'perspective(1000px) rotateY(180deg)' });
	$('.back').css({ transform: 'perspective(1000px) rotateY(0deg)' });

});
$(".back").click(function () {
	$('.front').css({ transform: 'perspective(1000px) rotateY(0deg)' });
	$('.back').css({ transform: 'perspective(1000px) rotateY(-180deg)' });

});


if (localStorage.Inter == 'NaN' || localStorage.Inter == NaN) {
	localStorage.Inter = 1;
}