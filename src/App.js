import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore} >
      <div className="text-3xl from-stone-800 text-green-500">
        <Body/>
      </div>
    </Provider>
  );
}
export default App;
