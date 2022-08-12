import "react-toastify/dist/ReactToastify.css";
import "./style/index.css";

import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "./store";

import AddTask from "./pages/AddTask";
import Dashboard from "./pages/Dashboard";
import EditTask from "./pages/EditTask";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="font-poppins text-sm antialiased disable-scrollbars bg-white">
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer autoClose={2000} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task-ekleme" element={<AddTask />} />
            <Route path="/task-duzenle/:id" element={<EditTask />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </div>
);
