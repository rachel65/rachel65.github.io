var discTotal = 3;
var dragOptions = {
	containment: "#inner-game-box",
	start: function(){
		$(this).css("z-index", 400)
	},
	stop: function(){
		$(this).css("z-index", 200)
	}
};
var moveCount = 0;

function defineGrid(d) {
	discTotal = d;
	if (discTotal == 2) {
		discTotal++;
	} else if (discTotal == 9){
		discTotal--;
	} else {
		$('#tower1').html('');
		$('#tower2').html('');
		$('#tower3').html('');
		for (var i = d; i > 0; i--) {
			drawDisc(1, i)
		};
		$('#disc1').draggable(dragOptions)
	};
	moveCount = 0;
	updateScore(moveCount++);
	$('#numDiscs').html(discTotal)
};

function drawDisc(tower, num) {
	$('#tower' + tower).prepend('<figure class="disc" id="disc' + num + '">' + num + '</figure>')
};

function makeDrag() {
	$('#tower1').find('.disc').draggable("destroy");
	$('#tower2').find('.disc').draggable("destroy");
	$('#tower3').find('.disc').draggable("destroy");
	$('#tower1').find('>:first-child').draggable(dragOptions);
	$('#tower2').find('>:first-child').draggable(dragOptions);
	$('#tower3').find('>:first-child').draggable(dragOptions)
};

function updateScore(score) {
	$('#moveCount').html(score);
	if(($('#tower1').find('>:first-child').text() == 0) && (($('#tower2').find('>:first-child').text() == 0) || ($('#tower3').find('>:first-child').text() == 0))) {
		$('#game-box').append('<div id="win">Congratulations! You won in ' + score + ' moves!</div>')
	}
};

$(document).ready(function(){
	$('#sel1').droppable({
		drop: function( event, ui ) {
			var temp = ui.draggable;
			var tempO = $('#tower1').find('>:first-child').text();
			if ((tempO > temp.text()) || (tempO == 0)) {
				drawDisc(1, temp.text());
				temp.remove();
				makeDrag();
				updateScore(moveCount++);
			} else {
				$(ui.draggable).draggable({
					revert: true
				})
			}
		}
	});
	$('#sel2').droppable({
		drop: function( event, ui ) {
			var temp = ui.draggable;
			var tempO = $('#tower2').find('>:first-child').text();
			if ((tempO > temp.text()) || (tempO == 0)) {
				drawDisc(2, temp.text());
				temp.remove();
				makeDrag();
				updateScore(moveCount++);
			} else {
				$(ui.draggable).draggable({
					revert: true
				})
			}
		}
	});
	$('#sel3').droppable({
		drop: function( event, ui ) {
			var temp = ui.draggable;
			var tempO = $('#tower3').find('>:first-child').text();
			if ((tempO > temp.text()) || (tempO == 0)) {
				drawDisc(3, temp.text());
				temp.remove();
				makeDrag();
				updateScore(moveCount++);
			} else {
				$(ui.draggable).draggable({
					revert: true
				})
			}
		}
	});
	defineGrid(discTotal);
})