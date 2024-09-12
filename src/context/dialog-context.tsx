"use client";

import {
  createContext,
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
} from "~/components/ui/dialog";
import { noop } from "~/lib/utils";

export type DialogContentType<Props = unknown> =
  FunctionComponent<Props>;

type DialogContextType = {
  openDialog: <Props extends object>(
    DialogContent: DialogContentType<Props>,
    props: Props,
  ) => void;
  closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType>({
  openDialog: noop,
  closeDialog: noop,
});

export function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      "useDialogContext must be used within a DialogContextProvider",
    );
  }

  return context;
}

type DialogState = {
  isOpen: boolean;
  content: ReactNode;
};

const defaultState: DialogState = {
  isOpen: false,
  content: null,
};

export type DialogContextProviderProps = {
  children: ReactNode;
};

export default function DialogContextProvider({
  children,
}: DialogContextProviderProps) {
  const [dialogState, setDialogState] =
    useState<DialogState>(defaultState);

  const openDialog = useCallback(function openDialog<
    Props extends object,
  >(DialogContent: DialogContentType<Props>, props: Props) {
    const nextState: DialogState = {
      isOpen: true,
      content: <DialogContent {...props} />,
    };

    setDialogState((prevState) => {
      if (prevState.isOpen) {
        return {
          ...prevState,
          isOpen: false,
          content: null,
        };
      }

      return nextState;
    });
  }, []);

  const closeDialog = useCallback(() => {
    setDialogState(defaultState);
  }, []);

  function handleOpenStateChange(isOpen: boolean) {
    if (!isOpen) {
      closeDialog();
    }
  }

  return (
    <DialogContext.Provider
      value={{
        openDialog,
        closeDialog,
      }}
    >
      {children}
      <Dialog
        open={dialogState.isOpen}
        onOpenChange={handleOpenStateChange}
      >
        <DialogContent>{dialogState.content}</DialogContent>
      </Dialog>
    </DialogContext.Provider>
  );
}
