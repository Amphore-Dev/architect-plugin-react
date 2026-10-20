import { useState } from "react";

export const __NAME__ = <T>(initialValue: T) => {
    const [value, setValue] = useState<T>(initialValue);

    return { value, setValue };
};
