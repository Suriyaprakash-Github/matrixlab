const { ethers } = require("ethers");
var BigNumber = require("big-number");

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545"
);

const privateKey = ethers.BigNumber.from(
  "0x5389e371de2ba5423e024d7c36a42400358596bf"
).toHexString();
const wallet = new ethers.Wallet(privateKey, provider);

const tokenAddress = ethers.BigNumber.from(
  "0x0Ae84F1D48949649375E12e83841F04c3Da5C32a"
).toHexString();
const tokenContract = new ethers.Contract(tokenAddress, abi, wallet);

const recipientAddress = ethers.BigNumber.from(
  "0x308fad5390627a7f55056b90314df095ebea39fc"
).toHexString();

const amount = ethers.utils.parseUnits("0.001", "3");

async function Trial() {
  const balance = await tokenContract.balanceOf(wallet.address);
  console.log(
    `Current balance: ${ethers.utils.formatUnits(
      balance,
      "TOKEN_DECIMALS"
    )} TOKEN_SYMBOL`
  );

  const transferTx = await tokenContract.transfer(recipientAddress, amount);
  console.log(`Transaction hash: ${transferTx.hash}`);
  await transferTx.wait();

  const newBalance = await tokenContract.balanceOf(wallet.address);
  console.log(
    `New balance: ${ethers.utils.formatUnits(
      newBalance,
      "TOKEN_DECIMALS"
    )} TOKEN_SYMBOL`
  );
}

Trial().catch((error) => {
  console.error(error);
});

export default Trial;

// status	true Transaction mined and execution succeed
// transaction hash	0x3cadf1adb3b76ac2646fdcba088cc834da625a0671eea76f08d496f54886c3f4
// from	0x5389E371dE2ba5423E024D7c36A42400358596bF
// to	ERC20Basic.(constructor)
// gas	826920 gas
// transaction cost	826920 gas
// input	0x608...00033
// decoded input	{}
// decoded output	 -
// logs	[]

// contract address: 0x92af6b04e75494898cd3a9ed368edb37b818130c

// 0x0ae84f1d48949649375e12e83841f04c3da5c32a;
