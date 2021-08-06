


const smartGarbage = function (trash, bins) {
    
  const sorted = bins

 if (trash === 'waste') {
  sorted['waste'] += 1
 } else if (trash === 'recycling') {
  sorted['recycling'] += 1
 } else  if (trash === 'compost') {
  sorted['compost'] += 1
 }
  return sorted
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
