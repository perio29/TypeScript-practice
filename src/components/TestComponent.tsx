import { useState } from "react";

interface Props {
  text: string;
}

interface User {
  id: number;
  name: string;
}

export const TestComponent: React.VFC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<User>({ id: 1, name: "john" });
  const [inputData, setInputData] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value);

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  );
};
