$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 700, 290, 20, "red");
    createPlatform(900, 600, 100, 20, "red");
    createPlatform(1200, 480, 150, 20, "red");
    createPlatform(300, 570, 150, 20, "red");
    createPlatform(100, 430, 150, 20,"red");
    createPlatform(450, 350, 150, 20,"red");
    createPlatform(750, 250, 150, 20,"red");
    createPlatform(1050, 150, 150, 20,"red");

    // TODO 3 - Create Collectable
    createCollectable("database", 100, 400);
    createCollectable("database", 1300, 450);
    createCollectable("database", 1100, 130);

    // TODO 4 - Create Cannons
    createCannon("right", 300, 1000);
    createCannon("left", 500, 1500);
    createCannon("top", 700,2000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
