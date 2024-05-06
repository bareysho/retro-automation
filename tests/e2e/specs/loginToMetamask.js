// Define the test suite "Metamask Extension tests"
// Define the test suite "Metamask Extension tests"
describe('Metamask Extension tests', () => {

  // Define the test case "connect to DApp with Metamask extension example"
  it('connect to DApp with Metamask extension example', () => {
    cy.setupMetamask(
        'mainnet',
        '12345678',
    )

    // Add a new network to Metamask using the `cy.addMetamaskNetwork()` command
    cy.addMetamaskNetwork({
      networkName: 'Optimism Goerli',
      rpcUrl: 'https://goerli.optimism.io',
      chainId: '420',
      symbol: 'ETH',
      blockExplorer: 'https://goerli-optimism.etherscan.io/',
      isTestnet: true,
    })

    // Visit the root URL of the DApp
    cy.visit('/');

    // Click the "Connect" button on the DApp
    cy.get('[data-testid="navbar-connect-wallet"]').click();
    cy.get('[data-testid="wallet-option-INJECTED"]').click();

    cy.acceptMetamaskAccess().should('be.true');

    cy.wait(3000);

    cy.get('.open-currency-select-button').last().click();
    cy.get('.token-item-0x4200000000000000000000000000000000000006').click();

    cy.get('input.token-amount-input').first().type('0.0001');

    cy.get('[data-testid="wrap-button"]').click();

    // Assert that the "Connect" button on the DApp shows the text "Connected"
    cy.confirmMetamaskTransaction().should('be.true');
  });
})
