import { useCommand } from 'reactive-vscode'

import { logger } from './utils'

type ExtensionCommand = () => void

const openLogger: ExtensionCommand = () =>
  useCommand('seedcord.openLogger', () => {
    logger.show()
  })

const dontNeedSeedcordCommands: ExtensionCommand[] = [openLogger]
const needsSeedcordCommands: ExtensionCommand[] = []

export default {
  dontNeedSeedcordCommands,
  needsSeedcordCommands
}
