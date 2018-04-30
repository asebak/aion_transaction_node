web3.fromWei(web3.eth.getBalance(web3.eth.coinbase)).toString()

web3.personal.unlockAccount("aion address","aion password","6000")

web3.eth.sendTransaction({from: 'from address', to: 'to address', value: web3.toWei(1)})