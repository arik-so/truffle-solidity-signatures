# truffle-solidity-signatures

## Setup

In order to be able to run this project, you have to be running Node 5.9.0.

This installs truffle and an Ethereum test RPC client.

```shell
npm install
```

## Execution

Open one terminal window and navigate to the project directory, where you will start testrpc to run in the background using the following command:

```shell
npm run setup
```

Make sure you aren't running any interfering Ethereum JSON-RPC clients that could interfere on the port. Make sure that before running the preceding command, port 8545 is unreachable on the loopback IP address.

In a **separate terminal window**, run the following command:

```shell
npm test
```

This runs the unit tests. If you wish to be able to run custom truffle scripts such as compile or deploy, you need to install truffle globally:

## Advanced

```shell
npm install -g truffle
```

This will enable the following commands:

```shell
truffle compile
truffle deploy
truffle test
```

Good luck!