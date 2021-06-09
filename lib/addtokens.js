function dummy(el) {
  console.log("click", el);
  addToken(el.target.dataset);
}

async function addToken(tokenData) {
  console.log("addToken", tokenData);
  const {
    contract,
    symbol,
    decimals,
    image,
  } = tokenData;

  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: contract, // The address that the token is at.
        symbol: symbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: decimals, // The number of decimals in the token
        image: image, // A string url of the token logo
      },
    },
  });

}

if (window.ethereum) { // modern dapp browsers
  window.ethereum.autoRefreshOnNetworkChange = false; // Silence a warning from Metamask
}

window.addEventListener('load', async () => {
  const items = document.getElementsByClassName('addTokenLink');
  for (var i = 0; i < items.length; i++) {
    let el = items[i];
    el.addEventListener('click', dummy);
  }
});
