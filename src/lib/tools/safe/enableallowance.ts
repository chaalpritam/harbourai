import Safe from '@safe-global/protocol-kit'
import { getAllowanceModuleDeployment } from '@safe-global/safe-modules-deployments'

const preExistingSafe = await Safe.init({
  provider: RPC_URL,
  signer: OWNER_1_PRIVATE_KEY,
  safeAddress: safeAddress
})

// Add Module
const allowanceModule = getAllowanceModuleDeployment({ network: '11155111' })!
const safeTransaction = await preExistingSafe.createEnableModuleTx(
  allowanceModule.networkAddresses['11155111']
)
const txResponse = await preExistingSafe.executeTransaction(safeTransaction)
console.log(txResponse)
