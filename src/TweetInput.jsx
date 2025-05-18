
import { Input, Button } from "antd";
import { useState } from "react";

const { TextArea } = Input;

function TweetInput() {
  const [value, setValue] = useState("");

  const isNearLimit = value.length >= 240;
  const isEmpty = value.trim().length === 0;

  return (
    <div className=" py-12 h-[100vh] flex flex-col w-[80%] max-w-[500px] mx-auto ">
      <div className="mx-auto w-[100%]">
        <h1 className="text-xl mb-2">Tweet Box</h1>

        <div style={{ position: "relative" }}>
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            showCount
            maxLength={280}
            placeholder="What's on your mind?"
            style={{
              height: "100px",
              resize: "none",
              borderColor: isNearLimit ? "red" : undefined,
            }}
          />
          {isNearLimit && (
            <div
              style={{
                position: "absolute",
                bottom: -45,
                right: 10,
                fontSize: 14,
                color: "red",
              }}
            >
              {280 - value.length !== 0
                ? `${280 - value.length} words left`
                : " Word Limit Reached"}
            </div>
          )}
        </div>

        <Button className="mt-2" type="primary" disabled={isEmpty}>
          Post
        </Button>
      </div>
    </div>
  );
}

export default TweetInput;
