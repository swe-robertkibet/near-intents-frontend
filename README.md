# NEAR Intents Frontend (Exploration)

This repository is a personal exploration of the [NEAR Intents](https://github.com/near/intents) smart contracts.  
The aim is to understand how intents can be expressed, simulated, and executed by building a minimal frontend that interacts with the contracts and related SDKs.

## Project Goals

- Experiment with building a frontend that connects to the NEAR Intents contracts.
- Explore how to express and submit intents through a UI.
- Simulate and visualize cross-chain intent flows (e.g. swaps, bridging).
- Gain practical experience with the technologies commonly used in the NEAR ecosystem.

## Tech Stack (proposed)

- **Frontend (TypeScript + React/Next.js)**  
  Used to build a clean UI where users can create, view, and simulate intents.  
  Provides type safety and scalability for dApp development.

- **EVM Compatibility (Solidity Contracts + NEAR EVM layer)**  
  Interact with smart contracts deployed on NEAR’s EVM-compatible layer.  
  Allows experimentation with writing or extending Solidity contracts and testing their integration with the UI.

- **SDKs & APIs**  
  Use NEAR JavaScript SDKs (and possibly intent-specific SDKs) to connect the frontend with the blockchain.  
  Explore REST/GraphQL endpoints to fetch contract state and transaction history.

- **Wallet Integration (NEAR Wallet / MetaMask)**  
  Enable signing of transactions and intent submissions from the browser.  
  Experiment with both NEAR-native wallets and MetaMask via EVM compatibility.

- **Rust (exploration only)**  
  Since some NEAR contracts are written in Rust, review their code and document how they expose APIs.  
  No direct Rust development planned, but useful for understanding underlying implementations.

- **Styling (TailwindCSS)**  
  Rapidly prototype the UI with a modern, responsive design.

## Roadmap

- [ ] Scaffold a basic frontend app (React + TypeScript + Tailwind)
- [ ] Integrate NEAR wallet connection
- [ ] Read from an existing NEAR Intents contract
- [ ] Display sample intents in the UI
- [ ] Submit a test intent transaction
- [ ] Add a cross-chain swap simulation demo
- [ ] Document learnings about SDK usage and contract interactions
