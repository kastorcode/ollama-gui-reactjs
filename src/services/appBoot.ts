import Store from '~/services/store'
import { disChats } from '~/stores/chats'
import { loadChats } from '~/stores/chats/actions'
import { disConfig } from '~/stores/config'
import { updateConfig } from '~/stores/config/actions'

export default class AppBoot {

  public static async run () {
    AppBoot.updateConfigHandler()
    AppBoot.loadChatsHandler()
    await AppBoot.sleep(1000)
  }

  private static sleep (ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private static loadChatsHandler () {
    const chats = Store.get('chats')
    if (!chats) return
    disChats(loadChats(chats))
  }

  private static updateConfigHandler () {
    const config = Store.get('config')
    if (!config) return
    disConfig(updateConfig(config))
  }

}