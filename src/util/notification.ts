import toast from "react-hot-toast";

export function errorNotification(message: string) {
  toast.error(message);
}

export function successNotification(message: string) {
    toast.success(message);
  }
  