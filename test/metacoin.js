var ethKeys = require('ethereumjs-keys');

contract('MetaCoin', function(accounts) {
  it("should put 10000 MetaCoin in the first account", function(done) {
    var meta = MetaCoin.deployed();

    meta.getBalance.call(accounts[0]).then(function(balance) {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    }).then(done).catch(done);
  });

  it("should send coin correctly", function(done) {
    var meta = MetaCoin.deployed();

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    meta.getBalance.call(account_one).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return meta.getBalance.call(account_two);
    }).then(function(balance) {
      console.dir(balance);
      account_two_starting_balance = balance.toNumber();
      return meta.sendCoin(account_two, amount, {from: account_one});
    }).then(function() {
      return meta.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return meta.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    }).then(done).catch(done);
  });

  it("should verify signature", function(done) {





    // var dk = ethKeys.create();
    // console.dir(otherSignature);

    // var privateKey = dk.privateKey;
    // console.log(privateKey);
    // var otherSignature = web3.eth.sign(account_one, hash);

    // console.log(otherSignature);
    // console.log(hash);
    // console.log(r);
    // console.log(s);
    // console.log(v);

    // var signature = '0x2ac19db245478a06032e69cdbd2b54e648b78431d0a47bd1fbab18f79f820ba407466e37adbe9e84541cab97ab7d290f4a64a5825c876d22109f3bf813254e8601';

    // console.dir(web3);





    var meta = MetaCoin.deployed();


    var currentProvider = web3.currentProvider;
    var web3lib = require('web3');
    var web4 = new web3lib(currentProvider);


    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var hash = '0x' + web4.sha3('Schoolbus');
    var signature = web4.eth.sign(account_one, hash);

    var r = signature.slice(0, 66);
    var s = '0x' + signature.slice(66, 130);
    var v = '0x' + signature.slice(130, 132);
    v = web4.toDecimal(v);

    var properties = {
      message: 'Schoolbus',
      address: account_one,
      hash: hash,
      signature: signature,
      r: r,
      s: s,
      v: v
    };

    console.dir(properties);

    meta.verify.call(hash, v, r, s)
    .then(function(response){
      console.log('Address used to sign: ' + account_one);
      console.log('Address Solidity thinks has signed: ' + response);
      assert.equal(account_one, response, 'Real signatory matches Solidity\'s response');
    })
    .finally(done);

  });

});
