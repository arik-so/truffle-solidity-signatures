contract MetaCoin {
	mapping (address => uint) balances;

	function MetaCoin() {
		balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;

		return true;
	}


    function checkSignature(address signer, string signedData, string signature) returns (string intermediary) {

        // var hash = '0x' + sha3(signedData);

        // var r = signature.slice(0, 66);
        // var s = '0x' + signature.slice(66, 130);
        // var v = '0x' + signature.slice(130, 132);
        // v = web3.toDecimal(v);
        // msg = '0x' + msg;

        return "goddammit";

    }

    function verify( bytes32 hash, uint8 v, bytes32 r, bytes32 s) constant returns(address retAddr) {
        retAddr= ecrecover(hash, v, r, s);
    }

  function getBalance(address addr) returns(uint) {
    return balances[addr];
  }
}
