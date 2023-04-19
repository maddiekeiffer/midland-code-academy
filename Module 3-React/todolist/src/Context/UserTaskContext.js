import { createContext } from "react";

const UserTaskContext = createContext({
    userTask: {
        username: '',
        task: '',
    },
    setUserTask: () => {},
});

export default UserTaskContext;