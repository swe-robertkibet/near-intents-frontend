"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { setupWalletSelector, WalletSelector } from '@near-wallet-selector/core';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { setupHereWallet } from '@near-wallet-selector/here-wallet';
import { setupMeteorWallet } from '@near-wallet-selector/meteor-wallet';
import { setupNightly } from '@near-wallet-selector/nightly';
import { setupSender } from '@near-wallet-selector/sender';
import { setupModal, WalletSelectorModal } from '@near-wallet-selector/modal-ui';

interface WalletContextType {
  selector: WalletSelector | null;
  modal: WalletSelectorModal | null;
  accounts: Array<{ accountId: string }>;
  accountId: string | null;
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
}

const WalletContext = createContext<WalletContextType | null>(null);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [selector, setSelector] = useState<WalletSelector | null>(null);
  const [modal, setModal] = useState<WalletSelectorModal | null>(null);
  const [accounts, setAccounts] = useState<Array<{ accountId: string }>>([]);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initWalletSelector = async () => {
      try {
        const walletSelector = await setupWalletSelector({
          network: "testnet",
          modules: [
            setupMyNearWallet(),
            setupHereWallet(),
            setupMeteorWallet(),
            setupNightly(),
            setupSender(),
          ],
        });

        const walletModal = setupModal(walletSelector, {
          contractId: "near-intents.testnet",
          theme: "dark",
        });

        setSelector(walletSelector);
        setModal(walletModal);

        // Subscribe to wallet state changes
        const subscription = walletSelector.store.observable.subscribe((state) => {
          setAccounts(state.accounts);
          setAccountId(state.accounts.find((account) => account.active)?.accountId || null);
        });

        setIsLoading(false);

        return () => subscription.unsubscribe();
      } catch (error) {
        console.error("Failed to initialize wallet selector:", error);
        setIsLoading(false);
      }
    };

    initWalletSelector();
  }, []);

  const signIn = () => {
    if (modal) {
      modal.show();
    }
  };

  const signOut = async () => {
    if (selector) {
      const wallet = await selector.wallet();
      await wallet.signOut();
    }
  };

  const value: WalletContextType = {
    selector,
    modal,
    accounts,
    accountId,
    signIn,
    signOut,
    isLoading,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};