import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
  },
]);

export default router;
