let playfield, fallingPiece, ghostPiece, paused;
let ghostMode = true;

const width = 10;
const height = 22;

function setup() {
	playfield = new Playfield(width, height);
	
	let totalWidth = playfield.cellSize * width + playfield.borderSize*2;
	let totalHeight = playfield.cellSize * height + playfield.borderSize*2;

	const canvas = createCanvas(totalWidth, totalHeight);
	canvas.parent("p5canvas")
	spawnNewPiece();
}


let prev = 0;
function draw() {
	
	//============================
	// Get time passed since last frame
	//============================
	
	let curr = millis();
	let delta = curr - prev;
	prev = curr;

	//============================
	// Update
	//============================
	
	if (!paused)
		fallingPiece.update(delta);
	
	// move down piece and spawn a new one
	// if necessary
	if (fallingPiece.timeToFall()) {
		fallingPiece.resetBuffer();
		fallingPiece.moveDown();
		
		if (!playfield.isValid(fallingPiece)) {
			fallingPiece.moveUp();
			spawnNewPiece();
		}
	}

	// copy falligPiece's location and
	// orientation, then hardDrop() it
	// if ghostMode is on
	ghostPiece.copy(fallingPiece)
	hardDrop(ghostPiece, playfield);
	playfield.clearLines();
	//============================
	// Draw
	//============================
	background(251);
	playfield.show();
	if (ghostMode) ghostPiece.show();
	fallingPiece.show();
}

function spawnNewPiece() {
	if (fallingPiece) {
		playfield.addToGrid(fallingPiece);
	}
	const pieces = ['O', 'J', 'L', 'S', 'Z', 'T', 'I']
	const choice = random(pieces);
	fallingPiece = new Piece(choice, playfield);
	ghostPiece = new Piece(choice, playfield);
	ghostPiece.isghost = true;
	ghostPiece.cells = fallingPiece.cells;
	redraw();
}

function hardDrop(piece, playfield) {
	// move down as long as current position is valid
	while (playfield.isValid(piece)) {
		piece.moveDown();
	}
	// in the last iteration the position isn't valid,
	// so move up
	piece.moveUp();
}

function toggleGhost() {
	ghostMode = !ghostMode;
}