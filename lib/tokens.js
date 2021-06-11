const networks = {
  1: "Ethereum Mainnet",
  3: "Ethereum Ropsten",
  4: "Ethereum Rinkeby",
  5: "Ethereum Goerli",
  42: "Ethereum Kovan",
  56: "Binance Smart Chain",
  137: "Matic Mainnet",
  "0x63564c40": "Harmony Mainnet",
};

const tokens = {
  1: [ // Ethereum Mainnet

    {
      symbol: "OHM",
      address: "0x383518188c0c6d7730d91b2c03a03c837814a899",
      decimals: 9,
      image: "https://etherscan.io/token/images/olympusdao_32.png",
    },

    {
      symbol: "sOHM",
      address: "0x31932e6e45012476ba3a3a4953cba62aee77fbbe",
      decimals: 9,
      image: "https://etherscan.io/token/images/olympusdao_32.png",
    },

  ],

  56: [ // Binance Smart Chain
    {
      symbol: "WBTC",
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      decimals: 8,
      image: "https://bscscan.com/token/images/bitcointoken_32.png",
    },
    {
      symbol: "STEEL",
      address: "0x9001ee054f1692fef3a48330cb543b6fec6287eb",
      decimals: 18,
      image: "https://bscscan.com/token/images/ironfinance-share_32.png",
    },
  ],
};
