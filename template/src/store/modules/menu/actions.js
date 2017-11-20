import wordpressService from '../../../services/app.service'
const getMenu = ({commit, state}) => {
  return wordpressService.getMenuByName('Main').then((menu) => {
    commit('BLOGMENU_UPDATED', menu.items)
  }).catch(error => {
    console.log(error)
  })
}

export {
  getMenu
}
