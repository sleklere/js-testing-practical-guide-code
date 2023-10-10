import { vi } from "vitest";

const path = {
  join: vi.fn((...args) => {
    return args[args.length - 1];
  }),
};

export default path; //must use export default since we do import path from 'path'; in src/util/io.js
