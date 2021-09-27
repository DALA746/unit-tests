export const firstLast = (items) => {
  // all function has to work
  if(items.length === 0) {   // if empy array 
    return 'No items!'
  } else if(items.length === 1) {
    return `Only item: ${items[0]}`
  } else {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`
  }
}
