import * as React from "react";
import { graphql } from "gatsby";

const Page = (props) => {
  return (
    <main>
      <h1>Hello!</h1>
      <pre>{JSON.stringify(props)}</pre>
    </main>
  );
};

export async function getServerData(args) {
  return {
    props: { args },
  };
}

export default Page;
