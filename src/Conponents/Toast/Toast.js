import { toast } from "react-toastify";

// Define the arrow function
const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    // You can add more cases for other types of toasts if needed
    default:
      toast(message);
  }
};
export default showToast;
// Usage in other components
// Example usage for success toast
showToast("Registration successful!", "success");

// Example usage for error toast
// You can pass the error message as the first argument
showToast("Error message here", "error");
