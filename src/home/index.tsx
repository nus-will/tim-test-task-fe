import logo from "../assets/images/logo.svg";

export default function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-white h-10 w-10">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-white rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}