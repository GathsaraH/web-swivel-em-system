import toast from "react-hot-toast";

export function errorNotification(message: string) {
  toast.error(message,{
    duration: 2000,
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
      marginTop: "80px",
    },
    iconTheme: {
      primary: "#d90000",
      secondary: "#FFFAEE",
    },
    position:'top-right'
  });
}

export function successNotification(message: string) {
  toast.success(message, {
    duration: 2000,
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
      marginTop: "80px",
    },
    iconTheme: {
      primary: "#00b500",
      secondary: "#FFFAEE",
    },
    position:'top-right'
  });
}
