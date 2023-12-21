import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

const AddProblemsForm = () => {
  // initialize inputs state
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    difficulty: "",
    category: "",
    videoId: "",
    link: "",
    order: 0,
    likes: 0,
    dislikes: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page refresh

    // convert inputs.order to integer instead of string
    const newProblem = {
      ...inputs,
      order: Number(inputs.order),
    };

    // save data to firebase db
    await setDoc(doc(firestore, "problems", inputs.id), newProblem);

    alert("saved to db");
  };

  return (
    <>
      <form
        className="p-6 flex flex-col max-w-sm gap-3"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="problem id"
          name="id"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="title"
          name="title"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="difficulty"
          name="difficulty"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="category"
          name="category"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="order"
          name="order"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="videoId?"
          name="videoId"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="link?"
          name="link"
        />
        <button>Save</button>
      </form>
    </>
  );
};

export default AddProblemsForm;
