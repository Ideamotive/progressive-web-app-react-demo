class LocationCache {
  get(){
    const location = localStorage.getItem('location');
    if(location){
      return JSON.parse(location);
    }
    return null
  }

  set(location){
    localStorage.setItem('location', JSON.stringify(location) );
  }
}

export default new LocationCache()