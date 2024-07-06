import {
    Dialog
} from "@/components/ui/dialog";
import React from "react";

const MainDialog = ({
  children,
  modalState,
}: {
  children: React.ReactNode;
  modalState: boolean;
}) => {
  return <Dialog open={modalState}>{children}</Dialog>;
};

export default MainDialog;
