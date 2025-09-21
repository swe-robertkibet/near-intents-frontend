"use client";

import { useState } from "react";
import { Menu, X, Lock, Search, Plus } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const networks = [
    { id: "eth", name: "ETH", icon: "🔷", selected: true },
    { id: "sol", name: "SOL", icon: "🟣", selected: false },
    { id: "arb", name: "ARB", icon: "🔵", selected: false },
    { id: "base", name: "BASE", icon: "🔵", selected: false },
    { id: "sui", name: "SUI", icon: "🔷", selected: false },
  ];

  const tokens = [
    { name: "ETH", symbol: "ETH", address: "ETH", icon: "🔷" },
    { name: "USDC", symbol: "USDC", address: "0xA0b...06eB48", icon: "💲" },
    { name: "AGA", symbol: "AGA", address: "0x87B...9Ea96C", icon: "🔺" },
    { name: "ALT", symbol: "ALT", address: "0x845...c0fbfb", icon: "⚫" },
    { name: "AUDIO", symbol: "AUDIO", address: "0x18a...658998", icon: "🟣" },
    { name: "AVAIL", symbol: "AVAIL", address: "0xeaB...C786d8", icon: "🔵" },
    { name: "BALL", symbol: "BALL", address: "0x393...1703Ca", icon: "🟠" },
    { name: "BDXN", symbol: "BDXN", address: "0x8dB...7CB091", icon: "🟢" },
  ];

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">NEAR intents</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a
            href="#"
            className="text-foreground-secondary hover:text-white transition-colors"
          >
            Bridge
          </a>
          <a
            href="#"
            className="text-foreground-secondary hover:text-white transition-colors"
          >
            USDC
          </a>
          <a
            href="#"
            className="text-foreground-secondary hover:text-white transition-colors"
          >
            Explorer
          </a>
          <a
            href="#"
            className="text-foreground-secondary hover:text-white transition-colors"
          >
            Legacy Tools
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <a
              href="#"
              className="text-foreground-secondary hover:text-white transition-colors"
            >
              Bridge
            </a>
            <a
              href="#"
              className="text-foreground-secondary hover:text-white transition-colors"
            >
              USDC
            </a>
            <a
              href="#"
              className="text-foreground-secondary hover:text-white transition-colors"
            >
              Explorer
            </a>
            <a
              href="#"
              className="text-foreground-secondary hover:text-white transition-colors"
            >
              Legacy Tools
            </a>
            <a
              href="#"
              className="text-foreground-secondary hover:text-white transition-colors"
            >
              FAQs
            </a>
          </nav>
        </div>
      )}

      <main className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-sm">
          <div className="bg-card rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-foreground-secondary text-sm">From</span>
            </div>
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-3 bg-background-secondary rounded-lg px-4 py-3 hover:bg-card-hover transition-colors">
                <Lock size={16} className="text-foreground-secondary" />
                <span className="text-white">Select</span>
              </button>
              <span className="text-4xl font-light text-foreground-secondary">
                0
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground-secondary"></div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-foreground-secondary text-sm">To</span>
            </div>
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-3 bg-background-secondary rounded-lg px-4 py-3 hover:bg-card-hover transition-colors">
                <Lock size={16} className="text-foreground-secondary" />
                <span className="text-white">Select</span>
              </button>
              <span className="text-4xl font-light text-foreground-secondary">
                0
              </span>
            </div>
          </div>

          <button
            className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-4 px-6 rounded-lg transition-colors"
            onClick={() => setShowNetworkModal(true)}
          >
            Connect source wallet
          </button>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 px-6 py-4 text-sm text-foreground-secondary">
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a href="#" className="hover:text-white transition-colors">
                𝕏
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Discord
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span>Powered by</span>
              <span className="font-bold">NEAR</span>
            </div>
          </div>
        </div>
      </footer>

      {showNetworkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background-secondary rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Select a network
                </h2>
                <button
                  onClick={() => setShowNetworkModal(false)}
                  className="p-2 hover:bg-card-hover rounded transition-colors"
                >
                  <X size={20} className="text-foreground-secondary" />
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-4">
                {networks.map((network) => (
                  <button
                    key={network.id}
                    className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                      network.selected
                        ? "bg-accent text-white"
                        : "bg-card hover:bg-card-hover text-foreground-secondary"
                    }`}
                  >
                    <span className="text-lg mb-1">{network.icon}</span>
                    <span className="text-xs font-medium">{network.name}</span>
                  </button>
                ))}
                <button className="flex flex-col items-center p-3 rounded-lg bg-card hover:bg-card-hover text-foreground-secondary transition-colors">
                  <Plus size={16} className="mb-1" />
                  <span className="text-xs font-medium">other</span>
                </button>
              </div>

              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-secondary"
                />
                <input
                  type="text"
                  placeholder="Search for a token or paste an address"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-card text-white placeholder-foreground-secondary pl-10 pr-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="overflow-y-auto max-h-96">
              <div className="p-6">
                <h3 className="text-sm text-foreground-secondary mb-4">
                  All tokens
                </h3>
                <div className="space-y-2">
                  {filteredTokens.map((token, index) => (
                    <button
                      key={index}
                      onClick={() => setShowNetworkModal(false)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-card transition-colors text-left"
                    >
                      <span className="text-lg">{token.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-white">
                          {token.name}
                        </div>
                        <div className="text-sm text-foreground-secondary">
                          {token.symbol} • {token.address}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
