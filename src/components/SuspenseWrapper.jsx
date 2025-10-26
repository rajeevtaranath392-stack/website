import React, { Suspense } from "react";
import Loader from "./Loader";

const SuspenseWrapper = ({ children }) => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default SuspenseWrapper;
