web3.personal.unlockAccount(eth.coinbase,"aion password") //returns true if unlock worked
web3.eth.sendTransaction({from: eth.coinbase, to: 'to address', value: web3.toWei(1)})
