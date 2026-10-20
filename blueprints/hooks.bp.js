import { useState } from "react";

export const __NAME__ = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return { value, setValue };
};
