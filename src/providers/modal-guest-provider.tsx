import React, { useCallback, useState, useMemo } from 'react';
import { ModalRoot, ModalType, ModalGuestContext } from '../contexts';
import GuestModal from '../components/modals/guest-modal';
import { useNavigation } from '@react-navigation/native';

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalGuestProvider = ({ children }: ModalProviderProps) => {
  const [guestModals, setGuestModals] = useState<Record<string, ModalType>>({});
  const showGuestModal = useCallback(
    (key: string) =>
      setGuestModals(value => ({
        ...value,
        [key]: () => (
          <GuestModal
            onClosed={() => {
              setGuestModals(mdls => {
                const newModals = { ...mdls };
                delete newModals[key];
                return newModals;
              });
            }}
          />
        ),
      })),
    [],
  );

  const guestContextValue = useMemo(() => ({ showGuestModal }), []);

  return (
    <ModalGuestContext.Provider value={guestContextValue}>
      <>
        {children}
        <ModalRoot modals={guestModals} />
      </>
    </ModalGuestContext.Provider>
  );
};
