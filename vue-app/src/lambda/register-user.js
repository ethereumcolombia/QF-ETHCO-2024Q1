import '@ethersproject/shims'
import { providers, Wallet, ethers } from 'ethers'
import { SimpleUserRegistry } from '../api/abi'

import fetch from 'node-fetch'
global.fetch = fetch

/**
 *  Returns an error object
 * @param errorMessage error message
 * @returns error object
 */
function makeError(errorMessage, errorNum) {
  const body = JSON.stringify({ error: errorMessage })
  return { statusCode: 400, body }
}

/**
 * Returns the result with statusCode and body
 * @param result the result
 * @returns result object
 */
function makeResult(result) {
  const body = JSON.stringify(result)
  return { statusCode: 200, body }
}
/**
 * Registers a user in the simple user registry
 * @param userRegistry The address of the user registry contract
 * @param userAddress The address of the user to register
 * @returns The transaction hash or an error object
 */
async function registerUserSimple(userRegistry, userAddress) {
  // TODO: BE CAREFUL DONT PUSH THIS
  const privateKey = process.env.WALLET_PRIVATE_KEY
  if (!privateKey) {
    return makeError('WALLET_PRIVATE_KEY not found in environment')
  }
  console.log({ privateKey, userRegistry, userAddress })
  // Set up provider and wallet
  const rpcUrl = process.env.VITE_ETHEREUM_API_URL || 'https://goerli.infura.io/v3/7d0c818399624dd4ab80d79e6a7893ec'
  const provider = new providers.StaticJsonRpcProvider({ url: rpcUrl, skipFetchSetup: true })
  const wallet = new Wallet(privateKey, provider)
  // Set up the registry contract
  const SimpleUserRegistryContract = new ethers.Contract(userRegistry, SimpleUserRegistry, wallet)
  try {
    // Check if already verified
    const isVerified = await SimpleUserRegistryContract.isVerifiedUser(userAddress)
    console.log({ isVerified })
    if (isVerified) {
      return makeError('User is already verified')
    } else {
      // Call the addUser function of the SimpleUserRegistry contract
      const tx = await SimpleUserRegistryContract.addUser(userAddress)
      return makeResult({ tx })
    }
  } catch (error) {
    console.log({ error })
    return makeError(error.message)
  }
}

exports.handler = async function(event) {
  // Ensure that the function only processes POST requests
  if (event.httpMethod !== 'POST') {
    return makeError('This function only accepts POST methods', 405)
  }
  if (!event.queryStringParameters) {
    return makeError('Missing params')
  }

  try {
    const { userRegistry, userAddress } = event.queryStringParameters

    if (!userRegistry || !userAddress) {
      return makeError('Missing userRegistry or userAddress in request body')
    }

    // Validate Ethereum addresses
    console.log({ userRegistry, userAddress })
    if (userRegistry.length !== 42 || userAddress.length !== 42) {
      return makeError('Invalid userRegistry or userAddress length')
    }

    return await registerUserSimple(userRegistry, userAddress)
  } catch (err) {
    return makeError('Failed to parse JSON body or internal server error: ' + err.message)
  }
}
