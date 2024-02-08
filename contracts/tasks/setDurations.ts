import { task, types } from 'hardhat/config'
import { MaciParameters } from '../utils/maci'

task('set-durations', 'Set the signup and voting durations for future rounds')
  .addParam('factory', 'The funding round factory contract address')
  .addParam('signup', 'Sign up duration in days', 10, types.int)
  .addParam('voting', 'Voting duration in days', 5, types.int)
  .setAction(async ({ factory, signup, voting }, { ethers }) => {
    const signUpDuration = signup * 60 * 60 * 24
    const votingDuration = voting * 60 * 60 * 24

    const fundingRoundFactory = await ethers.getContractAt(
      'FundingRoundFactory',
      factory
    )
    const maciFactoryAddress = await fundingRoundFactory.maciFactory()
    console.log({ maciFactoryAddress })

    const maciFactory = await ethers.getContractAt(
      'MACIFactory',
      maciFactoryAddress
    )
    const maciParameters = await MaciParameters.read(maciFactory)
    maciParameters.update({
      signUpDuration,
      votingDuration,
    })
    const setMaciParametersTx = await fundingRoundFactory.setMaciParameters(
      ...maciParameters.values()
    )
    await setMaciParametersTx.wait()

    const newParams = await MaciParameters.read(maciFactory)
    console.log('New durations set', newParams)
  })
