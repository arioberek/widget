(function () {
  const toastContainer = document.createElement("div");
  toastContainer.className = "toast-container";
  document.body.appendChild(toastContainer);

  function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    const closeButton = document.createElement("span");
    closeButton.className = "toast-close";
    closeButton.textContent = "×";
    closeButton.onclick = () => {
      toastContainer.removeChild(toast);
    };

    toast.appendChild(closeButton);
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 300);
    }, 3000);
  }

  window.showToast = showToast;

  const style = document.createElement("style");
  style.textContent = `
      .toast-container {
          position: fixed;
          bottom: 10px;
          right: 10px;
          z-index: 9999;
      }
      .toast {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 10px 20px;
          border-radius: 5px;
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
      }
      .toast.show {
          opacity: 1;
      }
      .toast.success {
          background-color: #4caf50;
      }
      .toast.error {
          background-color: #f44336;
      }
      .toast.info {
          background-color: #2196f3;
      }
      .toast-close {
          margin-left: 10px;
          cursor: pointer;
      }
  `;
  document.head.appendChild(style);
})();
