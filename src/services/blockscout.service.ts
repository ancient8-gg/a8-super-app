import { Configuration, DefaultApi } from 'blockscout-cli'

// NOTE: Default Configuration is mainnet
const configApi = new Configuration()

const BlockScoutService = new DefaultApi(configApi)

export default BlockScoutService
