export function getLocations() {
    return fetch('https://62581914e4e0b73142871e36.mockapi.io/spot/')
      .then(data => data.json())
  }