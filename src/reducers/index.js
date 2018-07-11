import {combineReducers} from 'redux'
import activeView from './activeView'
import maps from './maps'
import camera from './camera'
import description from './description'
import photos from './photos'
import configs from './configs'
import ui from './ui'

export default combineReducers({
  activeView,
  camera,
  configs,
  description,
  maps,
  photos,
  ui
})
