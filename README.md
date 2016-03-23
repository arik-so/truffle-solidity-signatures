# truffle-solidity-signatures

## Setup

In order to be able to run this project, you have to be running Node 5.9.0.

This installs truffle and an Ethereum test RPC client.

```shell
npm install -g truffle
npm install -g ethereumjs-testrpc
```

## Execution

Open one terminal window, where you will start testrpc to run in the background:

```shell
testrpc
```

In a separate terminal window, navigate to this project's directory, and try any of the following three commands:

```shell
truffle compile
truffle deploy
truffle test
```

Each command runs the preceding ones, so you should be able to simply run truffle test to run the unit tests.