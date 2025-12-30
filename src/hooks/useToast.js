import { useState } from "react";

export function useToast() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const fireToast = (msg) => {
    setMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return { showToast, message, fireToast };
}
