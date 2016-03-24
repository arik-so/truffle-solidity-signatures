"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var MetaCoin = (function (_Pudding) {
    _inherits(MetaCoin, _Pudding);

    function MetaCoin() {
      _classCallCheck(this, MetaCoin);

      _get(Object.getPrototypeOf(MetaCoin.prototype), "constructor", this).apply(this, arguments);
    }

    return MetaCoin;
  })(Pudding);

  ;

  // Set up specific data for this class.
  MetaCoin.abi = [{ "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "sendCoin", "outputs": [{ "name": "sufficient", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "hash", "type": "bytes32" }, { "name": "v", "type": "uint8" }, { "name": "r", "type": "bytes32" }, { "name": "s", "type": "bytes32" }], "name": "verify", "outputs": [{ "name": "retAddr", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "signer", "type": "address" }, { "name": "signedData", "type": "string" }, { "name": "signature", "type": "string" }], "name": "checkSignature", "outputs": [{ "name": "intermediary", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  MetaCoin.binary = "6060604052600160a060020a033216600090815260208190526040902061271090556102618061002f6000396000f3606060405260e060020a600035046390b98a11811461003c578063f1835db71461006b578063f77d1891146100bb578063f8b2cb4f14610187575b005b6101a360043560243533600160a060020a0316600090815260208190526040812054829010156102385761025b565b6101ad600435602435604435606435606084815260ff8416608090815260a084905260c083905260009160019160e0916020918186866161da5a03f1156100025750506040515195945050505050565b6080602060248035600481810135601f8101859004909402850160405260608481526101ca958235959294604494929392019190819083828082843750506040805160209735808a0135601f81018a90048a0283018a01909352828252969897606497919650602491909101945090925082915084018382808284375050604080516020818101835260009091528151808301909252600982527f676f6464616d6d69740000000000000000000000000000000000000000000000908201529998505050505050505050565b600160a060020a03600435166000908152602081905260409020545b6060908152602090f35b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b604080822080548490039055600160a060020a0384168252902080548201905560015b9291505056";

  if ("0xc24d11ad39241a42ffcce1184355dab6fb0fcd9f" != "") {
    MetaCoin.address = "0xc24d11ad39241a42ffcce1184355dab6fb0fcd9f";

    // Backward compatibility; Deprecated.
    MetaCoin.deployed_address = "0xc24d11ad39241a42ffcce1184355dab6fb0fcd9f";
  }

  MetaCoin.generated_with = "1.0.3";
  MetaCoin.contract_name = "MetaCoin";

  return MetaCoin;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.MetaCoin = factory;
}