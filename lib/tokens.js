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
  56: [ // Binance Smart Chain
    {
      symbol: "WBTC",
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      decimals: 8,
      image: "https://bscscan.com/token/images/bitcointoken_32.png",
      network: 56, // Binance Smart Chain
    },
    {
      symbol: "STEEL",
      address: "0x9001ee054f1692fef3a48330cb543b6fec6287eb",
      decimals: 18,
      image: "https://bscscan.com/token/images/ironfinance-share_32.png",
    },
  ],
};
