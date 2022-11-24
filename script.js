const body = document.querySelector("body")


const createBackground = () => {
  let seasonColor = choiceSeason()
  body.style.backgroundColor = seasonColor['colorSeason']
  body.textContent = seasonColor['nowSeason'].toUpperCase()
}

const choiceSeason = () => {
  let month = getDate()
  let season = getSeason(month)
  let color = getColor(season)
  return {colorSeason: color, nowSeason: season}
}

const getDate = () => {
  const now = new Date()
  return now.getMonth()
}

const getSeason = (month) => {
  if ((month > 0 && month < 3) || month === 12) {
    return 'winter'
  } else if (month > 5 && month < 9) {
    return 'summer'
  } else if (month > 3 && month < 6) {
    return 'spring'
  } else {
    return 'autumn'
  }
}

const getColor = (season) => {
  if (season === 'winter') {
    return 'lightblue'
  } else if (season === 'spring') {
    return 'green'
  } else if (season === 'summer') {
    return 'yellow'
  } else {
    return 'orange'
  }
}

createBackground()