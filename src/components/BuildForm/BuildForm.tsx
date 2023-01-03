import { useState } from "react";
import { Form, FormFieldContainer } from "../_atoms";
import { MatchUpSelect } from "../MatchUpSelect";

export const BuildForm = () => {
  const [matchupState, setMatchupState] = useState("");

  return (
    <div className="p-4">
      <h1>Submit a build order form</h1>

      <Form onSubmit={(e) => console.log(e)}>
        <FormFieldContainer>
          <MatchUpSelect
            onChange={(val) => setMatchupState(val)}
            value={matchupState}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <label htmlFor="build-order-input">Build Order</label>
          <textarea
            id="build-order-input"
            className="block w-full bg-gray-200 py-2 px-4 outline-none focus:bg-white"
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
    </div>
  );
};
