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

  137: [ // Matic

    {
      symbol: "WMATIC",
      address: "0xdd185af1bb417469461edbc95f22df9781a04624",
      decimals: 18,
      image: "https://assets.coingecko.com/coins/images/14073/small/matic.jpg?1614155404",
    },

    {
      symbol: "WBTC",
      address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      decimals: 18,
      image: "https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1548822744",
    },

    {
      symbol: "FISH",
      address: "0x3a3df212b7aa91aa0402b9035b098891d276572b",
      decimals: 18,
      image: "https://assets.coingecko.com/coins/images/15226/small/smallLogo.png?1620269393",
    },

    {
      symbol: "KRILL",
      address: "0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b",
      decimals: 18,
      image: "https://assets.coingecko.com/coins/images/15016/small/2.png?1619442213",
    },

    {
      symbol: "TITAN",
      address: "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a",
      decimals: 18,
      image: "https://assets.coingecko.com/coins/images/16031/small/76583210.png?1622634331",
    },
  ],

  56: [ // Binance Smart Chain

    {
      symbol: "BUNNY",
      address: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
      decimals: 18,
      image: "https://bscscan.com/token/images/pancakebunny_32.png",
    },

    {
      symbol: "CAKE",
      address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      decimals: 18,
      image: "https://bscscan.com/token/images/pancake_32.png?=v1",
    },

    {
      symbol: "WBNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      decimals: 18,
      image: "https://bscscan.com/token/images/binance_32.png",
    },

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

  "0x63564c40": [ // Harmony Mainnet",

    {
      symbol: "VIPER",
      address: "0xea589e93ff18b1a1f1e9bac7ef3e86ab62addc79",
      decimals: 18,
      image: "https://assets.coingecko.com/coins/images/15305/small/0c4b902b40f14db918f4500956386414ab7ebcfe.jpeg?1620371961",
    },

  ],
};
