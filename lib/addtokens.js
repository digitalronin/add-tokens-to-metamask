async function addTokenToMetamask(el) {
  const {
    address,
    symbol,
    decimals,
    image,
  } = el.target.dataset;

  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: address, // The address that the token is at.
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
       data-address="${tokenData.address}"
       data-symbol="${tokenData.symbol}"
       data-decimals="${tokenData.decimals}"
       data-image="${tokenData.image}"
       >
       ${tokenData.symbol}
    </a>
  `;
}

// Return HTML for a bootstrap card displaying the token data
function tokenCard(tokenData) {
  return `
        <div class="card">
          <div class="card-header">
            <img src="${tokenData.image}" />
            ${tokenData.symbol}
          </div>
          <div class="card-body">
            <p class="card-text">${tokenData.address}</p>
            ${addTokenButton(tokenData)}
          </div>
        </div>
  `;
}

function addTokenButton(tokenData) {
  return `
    <a href="#"
       class="addTokenLink btn btn-primary"
       data-address="${tokenData.address}"
       data-symbol="${tokenData.symbol}"
       data-decimals="${tokenData.decimals}"
       data-image="${tokenData.image}"
       >
       Add to metamask
    </a>
  `;
}


function appendRow(tbody, tokenData) {
  const rowcount = tbody.rows.length;
  const newRow = tbody.insertRow(rowcount);

  const [imageCell, tokenCell, addressCell, decimalsCell] = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
  ];

  tokenCell.innerHTML = addTokenLink(tokenData);
  addressCell.innerHTML = tokenData.address;
  decimalsCell.innerHTML = tokenData.decimals;
  imageCell.innerHTML = `<img src="${tokenData.image}" />`;
}

window.addEventListener('load', async () => {
  window.ethereum.autoRefreshOnNetworkChange = false; // Silence a warning from Metamask
  await window.ethereum.enable();
  // Force page refreshes on network changes
  window.ethereum.on('chainChanged', (chainId) => {
    window.location.reload();
  });

  const h1 = document.getElementById("networkName");
  const chainId = window.ethereum.networkVersion;
  console.log("chainId", chainId);
  h1.innerHTML = networks[chainId] || "Unsupported Network";

  // Add each token as a table row
  const tbody = document.getElementById("tokenList").getElementsByTagName('tbody')[0];
  const tokenCards = document.getElementById("tokenCards");
  const list = tokens[chainId] || [];
  for (const token of list) {
    tokenCards.insertAdjacentHTML("beforeend", tokenCard(token));
    appendRow(tbody, token);
  }

  // Add click handler for token links
  const links = document.getElementsByClassName('addTokenLink');
  for (const el of links) {
    el.addEventListener("click", addTokenToMetamask);
  }

});
