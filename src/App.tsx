import { getProjectEnvVariables } from "./shared/projectEnvVariables.ts";

const { envVariables } = getProjectEnvVariables()

function App() {
  return (
      <div id="example">
          <h1>VITE_VERSION</h1>
          <div>{envVariables.VITE_VERSION}</div>

          <hr />

          <h2>import.meta.env.VITE_VERSION</h2>
          <div>{import.meta.env.VITE_VERSION}</div>
      </div>
  )
}

export default App
