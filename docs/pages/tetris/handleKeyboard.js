console.log('keyboard')

const KEYS = {
  // Hash-Map-uh!
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  LEFT: "ArrowLeft",
  DOWN: "ArrowDown",
  SPACE: "Space",
  Z: "KeyZ",
  X: "KeyX",
  R: "KeyR",
  P: "KeyP",
  W: "KeyW",
  N: "KeyN"
}

document.addEventListener('keydown', event => {
  // console.log(event.code);
  const pressedKey = event.code;
  if (Object.values(KEYS).includes(pressedKey)) {
    event.preventDefault();
    // console.log("VALID");
  }
  switch (pressedKey) {
    case KEYS.UP: {
      fallingPiece.rotateCW();
      if (!playfield.isValid(fallingPiece))
        fallingPiece.rotateCCW();
      break;
    }
    case KEYS.RIGHT: {
      fallingPiece.moveRight();
      if (!playfield.isValid(fallingPiece))
        fallingPiece.moveLeft()
      break;
    }
    case KEYS.LEFT: {
      fallingPiece.moveLeft();
      if (!playfield.isValid(fallingPiece))
        fallingPiece.moveRight()
      break;
    }
    case KEYS.DOWN: {
      fallingPiece.moveDown();
      if (!playfield.isValid(fallingPiece))
        fallingPiece.moveUp()
      else
        fallingPiece.resetBuffer()
      break;
    }
    case KEYS.SPACE: {
      hardDrop(fallingPiece, playfield);
      spawnNewPiece();
      break;
    }
    case KEYS.Z: {
      fallingPiece.rotateCCW();
      if (!playfield.isValid(fallingPiece))
        fallingPiece.rotateCW();
      break;
    }
    case KEYS.X: {
      fallingPiece.rotateCW();
      if (!playfield.isValid(fallingPiece))
        fallingPiece.rotateCCW();
      break;
    }
    case KEYS.R: {
      spawnNewPiece();
      playfield.resetGrid();
      break;
    }
    case KEYS.P: {
      paused = !paused;
      break;
    }
    // case KEYS.W: {
    //   fallingPiece.y--;
    //   break;
    // }
    // case KEYS.N: {
    //   spawnNewPiece();
    //   break;
    // }
  }
});