import { useState } from "react";
import { Form, FormFieldContainer } from "../_atoms";
import { MatchUpSelect } from "../MatchUpSelect";
import { BuildOrderTextarea } from "../BuildOrderTextarea";

import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";

export const BuildForm = () => {
  const createBuildMutation = trpc.builds.submitBuild.useMutation();

  const [matchUp, setMatchUp] = useState("");
  const [buildOrder, setBuildOrder] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    await createBuildMutation.mutateAsync({ matchUp, buildOrder });
    router.push("./builds");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Submit a build order form</h1>
      <FormFieldContainer>
        <MatchUpSelect
          onChange={(val) => setMatchUp(val)}
          value={matchUp}
          required
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <BuildOrderTextarea
          onChange={(val) => setBuildOrder(val)}
          value={buildOrder}
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
