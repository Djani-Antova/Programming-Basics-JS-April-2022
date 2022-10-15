function summerOutfit(input) {
  let degree = Number(input[0]);
  let partOfDay = input[1];
  let outfit;
  let shoes;

  // "Morning", "Afternoon", "Evening"
  // "Sweatshirt" "Shirt" "T-Shirt" "Swim Suit"
  // "Sneakers" "Moccasins" "Sandals" "Barefoot"

  switch (partOfDay) {
    case "Morning":
      if (degree >= 10 && degree <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degree <= 24 && degree > 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degree >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (degree >= 10 && degree <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degree <= 24 && degree > 18) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (degree >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      outfit = "Shirt";
      shoes = "Moccasins";
      break;
  }
  console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["18", "Afternoon"]);
