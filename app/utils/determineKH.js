export default function determineKH(selectedKG) {
  if (
    selectedKG.includes("1") &&
    selectedKG.includes("2") &&
    selectedKG.includes("3") &&
    selectedKG.includes("7") 
  ) {
    return "1";
  } else if (selectedKG.includes("1") && selectedKG.includes("2")) {
    return "2";
  } else if (
    selectedKG.includes("1") &&
    selectedKG.includes("3") &&
    selectedKG.includes("6") 
  ) {
    return "3";
  } else if (
    selectedKG.includes("4") &&
    selectedKG.includes("5") &&
    selectedKG.includes("8") &&
    selectedKG.includes("10") 
  ) {
    return "4";
  } else if (
    selectedKG.includes("1") &&
    selectedKG.includes("9") &&
    selectedKG.includes("10") 
  ) {
    return "5";
  } 
  else {
    return "0";
  }
}
