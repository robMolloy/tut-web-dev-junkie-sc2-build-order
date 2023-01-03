import { useState } from "react";
import { Form, FormFieldContainer } from "../_atoms";
import { MatchUpSelect } from "../MatchUpSelect";
import { BuildOrderTextarea } from "../BuildOrderTextarea";

export const BuildForm = () => {
  const [matchUpState, setMatchUpState] = useState("");
  const [buildOrderState, setBuildOrderState] = useState("");

  return (
    <Form onSubmit={() => console.log({ matchUpState, buildOrderState })}>
      <h1>Submit a build order form</h1>
      <FormFieldContainer>
        <MatchUpSelect
          onChange={(val) => setMatchUpState(val)}
          value={matchUpState}
          required
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <BuildOrderTextarea
          onChange={(val) => setBuildOrderState(val)}
          value={buildOrderState}
          required
        />
      </FormFieldContainer>

      <FormFieldContainer center hideBottomSpace>
        <button
          type="submit"
          className="inline-block rounded bg-blue-600 px-6 py-2 uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          Submit
        </button>
      </FormFieldContainer>
    </Form>
  );
};
