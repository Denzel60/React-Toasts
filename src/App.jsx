import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// install the package to use the toasters( npm i react-toastify )
// https://www.npmjs.com/package/react-toastify

function App() {
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-center"
    });

    toast.error("Error Notification !", {
      position: "top-left"
    });

    toast.warn("Warning Notification !", {
      position: "bottom-left"
    });

    toast.info("Info Notification !", {
      position: "bottom-center"
    });

    toast("Custom Style Notification with css class!", {
      position: "bottom-right",
      className: 'foo-bar'
    });
  };

  return (
    <>
      <button onClick={notify}>Notify</button>;
      <ToastContainer
        // position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      // transition:Bounce,
      />
    </>
  );
}

export default App

