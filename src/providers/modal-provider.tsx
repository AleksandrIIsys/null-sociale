import React, { useCallback, useState, useMemo } from 'react';
import { ModalContext, ModalRoot, ModalType } from '../contexts';
import StatusMessageModal from '../components/modals/status-message-modal';

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<Record<string, ModalType>>({});
  const showModal = useCallback(
    (
      key: string,
      description: string,
      type: 'error' | 'success' | 'option',
      title?: string,
      onPress?: (...arg: any[]) => void,
      onCloseModal?: (...arg: any[]) => void,
      btnTitle?: string,
    ) =>
      setModals(value => ({
        ...value,
        [key]: () => (
          <StatusMessageModal
            type={type}
            text={description}
            onPress={onPress}
            title={title}
            onCloseModal={onCloseModal}
            onClosed={() => {
              setModals(mdls => {
                const newModals = { ...mdls };
                delete newModals[key];
                return newModals;
              });
            }}
            btnTitle={btnTitle}
          />
        ),
      })),
    [],
  );

  const contextValue = useMemo(() => ({ showModal }), []);

  return (
    <>
      <ModalContext.Provider value={contextValue}>
        <>
          {children}
          <ModalRoot modals={modals} />
        </>
      </ModalContext.Provider>
    </>
  );
};
