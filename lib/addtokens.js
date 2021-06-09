async function addToken(el) {
  const {
    contract,
    symbol,
    decimals,
    image,
  } = el.target.dataset;

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

function addTokenLink(tokenData) {
  return `
    <a href="#"
       class="addTokenLink"
       data-contract="${tokenData.contract}"
       data-symbol="${tokenData.symbol}"
       data-decimals="${tokenData.decimals}"
       data-image="${tokenData.image}"
       >
       ${tokenData.symbol}
    </a>
  `;
}

function appendRow(tbody, tokenData) {
  const rowcount = tbody.rows.length;

  const newRow  = tbody.insertRow(rowcount);

  const [imageCell, tokenCell, addressCell, decimalsCell] = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
  ];

  tokenCell.innerHTML = addTokenLink(tokenData);
  addressCell.innerHTML = tokenData.contract;
  decimalsCell.innerHTML = tokenData.decimals;
  imageCell.innerHTML = `<img src="${tokenData.image}" />`;
}

if (window.ethereum) { // modern dapp browsers
  window.ethereum.autoRefreshOnNetworkChange = false; // Silence a warning from Metamask
}

window.addEventListener('load', async () => {
  const tbody = document.getElementById("tokenList").getElementsByTagName('tbody')[0];
  appendRow(tbody, tokens[0]);

  const items = document.getElementsByClassName('addTokenLink');

  for (var i = 0; i < items.length; i++) {
    let el = items[i];
    el.addEventListener("click", addToken);
  }
});
