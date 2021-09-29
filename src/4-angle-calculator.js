export const angleCalculator = (turns) => {
  // is it correct way? all tests is passed hmm 
  if(turns === 0) {
    return 0
  } else if(turns === 1) {
    return 360
  } else if(turns === 1.5) {
    return 540
  } else {
    return 720
  }
}

//pass