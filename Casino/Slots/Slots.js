const symbols = ["🍒", "🍋", "🍊", "7", "🔔", "💎"];

function spin() {
  const reels = [
    document.getElementById("reel1"),
    document.getElementById("reel2"),
    document.getElementById("reel3")
  ];

  let spins = 20; // number of animation frames
  let count = 0;

  const interval = setInterval(() => {
    reels.forEach(reel => {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      reel.textContent = randomSymbol;
    });
    count++;
    if (count >= spins) {
      clearInterval(interval);

      // Final result
      const finalSymbols = reels.map(() =>
        symbols[Math.floor(Math.random() * symbols.length)]
      );
      finalSymbols.forEach((symbol, i) => reels[i].textContent = symbol);

      const [r1, r2, r3] = finalSymbols;
      const result = document.getElementById("result");
      if (r1 === r2 && r2 === r3) {
        result.textContent = "Jackpot!";
      } else if (r1 === r2 || r2 === r3 || r1 === r3) {
        result.textContent = "Nice! Two match!";
      } else {
        result.textContent = "Try again!";
      }
    }
  }, 50); // speed of spin (ms)
}
