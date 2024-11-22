enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
  }
  function getColorMessage(color: Color): string {
    return `El color seleccionado es: ${color}`;
  }
  const myColor = Color.Green;
  console.log(getColorMessage(myColor));